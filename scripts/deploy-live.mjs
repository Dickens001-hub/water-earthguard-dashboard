import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import net from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const deployDir = resolve(root, "deploy/water.earthguardinnovations.org");
const vercelCmd = resolve(root, "node_modules/.bin/vercel.cmd");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function canReach(host, port = 443, timeoutMs = 7000) {
  return new Promise((resolveReach) => {
    const socket = net.createConnection({ host, port });
    let settled = false;

    const finish = (ok) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolveReach(ok);
    };

    socket.setTimeout(timeoutMs);
    socket.on("connect", () => finish(true));
    socket.on("timeout", () => finish(false));
    socket.on("error", () => finish(false));
  });
}

async function requireNetwork(host, purpose) {
  const reachable = await canReach(host);
  if (!reachable) {
    console.error(`Cannot reach ${host}:443, so ${purpose} cannot continue.`);
    console.error("Check firewall, VPN, proxy, antivirus, or network policy, then rerun scripts\\deploy-live.cmd.");
    process.exit(1);
  }
}

run("node", ["--check", "dashboard.js"], root);
run("node", ["--check", "dashboard.js"], deployDir);

if (!existsSync(vercelCmd)) {
  await requireNetwork("registry.npmjs.org", "installing the Vercel CLI");
  run("npm.cmd", ["install"], root);
}

await requireNetwork("api.vercel.com", "deploying to Vercel");
run(vercelCmd, ["--prod"], deployDir);
