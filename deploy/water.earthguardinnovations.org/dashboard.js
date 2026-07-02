const alerts = [
  {
    id: "ALT-1042",
    risk: "High",
    color: "red",
    source: "Acoustic A-03",
    cause: "Continuous night flow with leak noise on old metallic main",
    action: "Inspect East Road between Valve V07 and Acoustic A-03. Probability: 86%",
    evidenceStrength: "High",
    leakRisk: 86,
    theftRisk: 18,
    revenueLossToday: 195500,
    monthlyRecovery: 5865000,
    annualRecovery: 71357500,
    status: "Team A assigned",
    acknowledged: false,
  },
  {
    id: "ALT-1038",
    risk: "Commercial",
    color: "black",
    source: "Smart meter M-18",
    cause: "Zero customer usage while branch flow and nearby demand remain normal",
    action: "Inspect Market Street between Valve V12 and Meter Cluster M8. Probability: 82%",
    evidenceStrength: "High",
    leakRisk: 16,
    theftRisk: 82,
    revenueLossToday: 32750,
    monthlyRecovery: 982500,
    annualRecovery: 11953750,
    status: "Audit pending",
    acknowledged: false,
  },
  {
    id: "ALT-1035",
    risk: "Medium",
    color: "yellow",
    source: "Pressure P-02",
    cause: "Sudden pressure drop after repeated high night pressure",
    action: "Inspect High Ridge Branch between PRV V01 and Pressure P-02. Probability: 71%",
    evidenceStrength: "Medium",
    leakRisk: 71,
    theftRisk: 14,
    revenueLossToday: 79500,
    monthlyRecovery: 2385000,
    annualRecovery: 29017500,
    status: "Team C on site",
    acknowledged: true,
  },
  {
    id: "ALT-1029",
    risk: "Medium",
    color: "yellow",
    source: "Bulk meter F-01",
    cause: "Minimum night flow above baseline",
    action: "Run DMA balance check and compare inlet flow with customer meter clusters",
    evidenceStrength: "Medium",
    leakRisk: 68,
    theftRisk: 32,
    revenueLossToday: 126000,
    monthlyRecovery: 3780000,
    annualRecovery: 45990000,
    status: "Monitoring",
    acknowledged: true,
  },
  {
    id: "ALT-1024",
    risk: "Quality",
    color: "quality",
    source: "Quality Q-01",
    cause: "Residual chlorine trending toward the lower operating limit",
    action: "Send field team for chlorine confirmation test and check nearby dead-end main",
    evidenceStrength: "Low",
    leakRisk: 22,
    theftRisk: 8,
    revenueLossToday: 0,
    monthlyRecovery: 0,
    annualRecovery: 0,
    status: "Sampling scheduled",
    acknowledged: false,
  },
];

const sensors = [
  ["F-01", "Bulk flow meter", "112.6 m3/h", "91%", "-72 dBm", "42 sec", "Online", "Calibrated"],
  ["P-01", "Inlet pressure", "32.4 m", "86%", "-76 dBm", "55 sec", "Online", "Calibrated"],
  ["P-02", "High point pressure", "18.9 m", "78%", "-81 dBm", "2 min", "Needs check", "Due in 5 days"],
  ["P-03", "Low point pressure", "41.2 m", "83%", "-69 dBm", "39 sec", "Online", "Calibrated"],
  ["A-03", "Acoustic sensor", "High leak noise", "64%", "-84 dBm", "4 min", "Alert", "Needs field validation"],
  ["M-18", "Smart customer meter", "0.0 m3/day", "72%", "-79 dBm", "6 min", "Alert", "Tamper seal audit"],
  ["V-01", "PRV monitor", "Night setpoint drift", "88%", "-74 dBm", "1 min", "Needs check", "Calibration due"],
  ["Q-01", "Water quality probe", "pH 7.3, turbidity 1.2 NTU", "81%", "-77 dBm", "50 sec", "Online", "Calibrated"],
  ["Q-02", "Residual chlorine", "0.42 mg/L", "84%", "-73 dBm", "3 min", "Retest", "Reagent check due"],
  ["Q-03", "Conductivity sensor", "486 uS/cm", "89%", "-75 dBm", "46 sec", "Online", "Calibrated"],
];

const registeredMembers = [
  {
    name: "Market Street Traders Association",
    type: "Commercial customer",
    account: "ACC-44821",
    meter: "M-18",
    zone: "Market Cluster",
    status: "Needs audit",
    color: "yellow",
    lastActivity: "Meter audit pending",
    notes: "Zero customer usage while branch flow remains normal.",
  },
  {
    name: "Amina Otieno",
    type: "Residential customer",
    account: "ACC-44109",
    meter: "M-07",
    zone: "East Road Crossing",
    status: "Active",
    color: "green",
    lastActivity: "Usage read 18 min ago",
    notes: "Priority SMS enabled for planned isolation alerts.",
  },
  {
    name: "St. Mary Health Centre",
    type: "Priority connection",
    account: "ACC-44012",
    meter: "M-03",
    zone: "East Road Crossing",
    status: "Active",
    color: "green",
    lastActivity: "Pressure notice sent",
    notes: "Critical service connection; include in outage notifications.",
  },
  {
    name: "High Ridge Primary School",
    type: "Institution",
    account: "ACC-45230",
    meter: "M-24",
    zone: "High Ridge Branch",
    status: "Active",
    color: "green",
    lastActivity: "Billing sync 1 hr ago",
    notes: "Morning demand peak included in usage forecast.",
  },
  {
    name: "Joseph Mwangi",
    type: "Residential customer",
    account: "ACC-45883",
    meter: "M-31",
    zone: "Low Elevation Loop",
    status: "Active",
    color: "green",
    lastActivity: "Usage read 9 min ago",
    notes: "Normal consumption profile.",
  },
  {
    name: "Team A Field Lead",
    type: "Utility operator",
    account: "OPS-014",
    meter: "A-03",
    zone: "East Road Crossing",
    status: "Active",
    color: "green",
    lastActivity: "Assigned WO-219",
    notes: "Responsible for acoustic confirmation and GPS evidence.",
  },
  {
    name: "Team B Revenue Protection",
    type: "Utility operator",
    account: "OPS-021",
    meter: "M-18",
    zone: "Market Cluster",
    status: "Needs audit",
    color: "yellow",
    lastActivity: "Assigned WO-220",
    notes: "Responsible for bypass and illegal connection inspection.",
  },
  {
    name: "DMA-04 Supervisor",
    type: "Utility admin",
    account: "OPS-001",
    meter: "F-01",
    zone: "Urban DMA-04",
    status: "Active",
    color: "green",
    lastActivity: "Reviewed risk ranking",
    notes: "Can approve isolation and customer notification sequence.",
  },
];

const works = [
  {
    title: "WO-219 - Targeted acoustic inspection",
    status: "Urgent",
    color: "red",
    text: "Navigate to East Road between Valve V07 and Acoustic A-03. Capture GPS, photos, leak noise, and mark excavation point.",
  },
  {
    title: "WO-220 - Illegal connection audit",
    status: "Open",
    color: "black",
    text: "Inspect Market Street between Valve V12 and Meter Cluster M8 for bypass, illegal tap, stuck meter, or unregistered branch.",
  },
  {
    title: "WO-221 - PRV validation",
    status: "In progress",
    color: "yellow",
    text: "Team C validating night pressure settings at V-01 and checking downstream pressure stability.",
  },
  {
    title: "WO-222 - Manual pressure check",
    status: "Open",
    color: "yellow",
    text: "Compare P-02 with handheld gauge and inspect chamber drainage condition.",
  },
  {
    title: "WO-223 - Water quality sampling",
    status: "Open",
    color: "quality",
    text: "Collect field sample at Q-01, confirm residual chlorine, check turbidity, and inspect for stagnant branch flow.",
  },
];

const nightFlow = [
  ["Mon", 68],
  ["Tue", 72],
  ["Wed", 75],
  ["Thu", 88],
  ["Fri", 91],
  ["Sat", 86],
  ["Sun", 94],
];

const forecastRisk = [
  ["Now", 72, "Monitor", "yellow"],
  ["+2h", 78, "High", "red"],
  ["+4h", 68, "Monitor", "yellow"],
  ["+6h", 52, "Stable", "green"],
  ["+9h", 45, "Stable", "green"],
  ["+12h", 38, "Stable", "green"],
];

const qualityTests = [
  ["Residual chlorine", "0.42 mg/L", "Retest required", "Safe range: 0.2-0.5 mg/L"],
  ["Turbidity", "1.2 NTU", "Within safe limit", "Limit: below 5 NTU"],
  ["pH", "7.3", "Within safe range", "Safe range: 6.5-8.5"],
  ["Conductivity", "486 uS/cm", "Stable", "No abnormal conductivity shift"],
  ["Temperature", "21.8 C", "Normal", "Normal for this zone"],
];

const controlLimits = [
  ["NRW target", "< 35%", "Pilot goal after 90 days"],
  ["Night flow", "< 72 m3/h", "00:00 to 04:00 baseline"],
  ["Pressure band", "20-45 m", "Service and burst control"],
  ["Telemetry", "> 95%", "Commissioning acceptance"],
  ["Missing water", "< 8%", "DMA balance investigation threshold"],
];

const integrityChecks = [
  ["DMA boundary", "Verified", "green"],
  ["Bulk meter calibration", "Passed", "green"],
  ["Alert workflow", "Live", "green"],
  ["Sensor battery reserve", "2 need check", "yellow"],
  ["Quality sampling chain", "Ready", "green"],
];

const waterBalance = [
  ["DMA inlet volume", "2,704 m3 today", 100, "teal"],
  ["Billed and metered demand", "1,665 m3 today", 62, "blue"],
  ["Known legitimate use", "126 m3 today", 5, "green"],
  ["Estimated real loss", "782 m3 today", 29, "yellow"],
  ["Missing water suspect", "131 m3 today", 5, "black"],
];

const playbook = [
  "Calculate DMA water balance: inflow minus billed water minus known legitimate use minus estimated leakage.",
  "Fuse abnormal night flow, pressure drop, meter mismatch, billing history, and nearby customer behavior.",
  "Send the team to the highest-probability asset segment, not the whole DMA.",
  "Close the loop with photos, GPS, meter scan, notice, disconnection, repair, or customer regularisation.",
];

const fusionSignals = [
  ["Illegal tap pattern", "Night flow + zero billing", 82, "black"],
  ["Pipe burst pattern", "Sudden pressure drop", 71, "red"],
  ["Meter bypass pattern", "Usage below peer group", 78, "black"],
  ["Hidden leak pattern", "Continuous night flow", 86, "yellow"],
];

const samplingChain = [
  "Field sample: Q-01 chamber and downstream tap.",
  "Lab check: chlorine, turbidity, pH, conductivity, E. coli screen.",
  "Decision: flush branch or isolate if contamination is confirmed.",
];

const lossAreas = [
  {
    id: "L-01",
    area: "East Road, Valve V07 to Acoustic A-03",
    type: "Physical leak",
    loss: "782 m3/day",
    customers: "524",
    confidence: "86%",
    leakRisk: 94,
    theftRisk: 22,
    meterFault: 18,
    customerImpact: 84,
    revenueRecovery: 72,
    revenueLossToday: 195500,
    monthlyRecovery: 5865000,
    annualRecovery: 71357500,
    color: "red",
    evidence: "Acoustic A-03, high night flow, sudden P-02 pressure drop",
    action: "Navigate to segment, record GPS/photos, confirm leak noise, mark dig point",
  },
  {
    id: "L-02",
    area: "Market Street, Valve V12 to Meter Cluster M8",
    type: "Commercial loss",
    loss: "131 m3/day",
    customers: "318",
    confidence: "82%",
    leakRisk: 28,
    theftRisk: 91,
    meterFault: 82,
    customerImpact: 63,
    revenueRecovery: 96,
    revenueLossToday: 32750,
    monthlyRecovery: 982500,
    annualRecovery: 11953750,
    color: "black",
    evidence: "M-18 zero usage, low-billing peer anomaly, branch flow mismatch",
    action: "Scan meters, inspect for illegal tap or bypass, issue notice or regularise",
  },
  {
    id: "L-03",
    area: "High Ridge Branch, PRV V01 to Pressure P-02",
    type: "Pressure-driven leakage",
    loss: "318 m3/day",
    customers: "442",
    confidence: "69%",
    leakRisk: 76,
    theftRisk: 19,
    meterFault: 24,
    customerImpact: 71,
    revenueRecovery: 58,
    revenueLossToday: 79500,
    monthlyRecovery: 2385000,
    annualRecovery: 29017500,
    color: "yellow",
    evidence: "P-02 low pressure, V-01 night setpoint drift",
    action: "Validate PRV and inspect old pipe bedding",
  },
  {
    id: "L-04",
    area: "South Lane, Meter Cluster M11",
    type: "Meter failure cluster",
    loss: "64 m3/day",
    customers: "86",
    confidence: "77%",
    leakRisk: 22,
    theftRisk: 74,
    meterFault: 92,
    customerImpact: 39,
    revenueRecovery: 68,
    revenueLossToday: 16000,
    monthlyRecovery: 480000,
    annualRecovery: 5840000,
    color: "black",
    evidence: "Repeated meter failures, zero-consumption meters in active supply zone",
    action: "Scan meters, replace failed devices, compare reads with nearby similar users",
  },
];

const assetRiskScores = [
  {
    asset: "DMA-04",
    class: "DMA",
    location: "Urban DMA-04 boundary",
    leakRisk: 81,
    theftRisk: 68,
    meterFault: 41,
    customerImpact: 89,
    revenueRecovery: 88,
    recommendation: "Use DMA balance to split the missing water into leak, theft, meter-failure, and legitimate-use hypotheses.",
  },
  {
    asset: "V12-M8",
    class: "Valve-to-meter segment",
    location: "Market Street between Valve V12 and Meter Cluster M8",
    leakRisk: 16,
    theftRisk: 94,
    meterFault: 88,
    customerImpact: 62,
    revenueRecovery: 98,
    recommendation: "Inspect this street first for an illegal tap, meter bypass, tampering, or an unregistered branch.",
  },
  {
    asset: "V-01",
    class: "Valve",
    location: "High Ridge PRV V01 chamber",
    leakRisk: 57,
    theftRisk: 14,
    meterFault: 12,
    customerImpact: 69,
    revenueRecovery: 42,
    recommendation: "Validate valve position and restore night pressure setpoint after field gauge confirmation.",
  },
  {
    asset: "V07-A03",
    class: "Pipe section",
    location: "East Road between Valve V07 and Acoustic A-03",
    leakRisk: 96,
    theftRisk: 24,
    meterFault: 8,
    customerImpact: 86,
    revenueRecovery: 74,
    recommendation: "Send acoustic team and mark the dig point before pressure damage expands.",
  },
  {
    asset: "M11",
    class: "Meter cluster",
    location: "South Lane Meter Cluster M11",
    leakRisk: 22,
    theftRisk: 74,
    meterFault: 92,
    customerImpact: 39,
    revenueRecovery: 68,
    recommendation: "Scan failed and zero-consumption meters, compare with nearby similar users, and regularise confirmed bypasses.",
  },
  {
    asset: "V01-P02",
    class: "Pipe section",
    location: "High Ridge Branch between PRV V01 and Pressure P-02",
    leakRisk: 73,
    theftRisk: 18,
    meterFault: 17,
    customerImpact: 72,
    revenueRecovery: 55,
    recommendation: "Inspect old pipe bedding after PRV correction if night flow remains high.",
  },
];

const mlLeakageSamples = [
  {
    asset: "V07-A03",
    location: "East Road, Valve V07 to Acoustic A-03",
    pattern: "Hidden leak",
    nightFlowIndex: 0.94,
    pressureDropIndex: 0.78,
    billingGapIndex: 0.38,
    acousticIndex: 0.96,
    meterFailureIndex: 0.08,
    peerMismatchIndex: 0.22,
    expectedUsage: 824,
    observedUsage: 701,
    action: "Send acoustic crew and mark likely dig point.",
  },
  {
    asset: "V12-M8",
    location: "Market Street, Valve V12 to Meter Cluster M8",
    pattern: "Illegal connection or bypass",
    nightFlowIndex: 0.82,
    pressureDropIndex: 0.22,
    billingGapIndex: 0.91,
    acousticIndex: 0.18,
    meterFailureIndex: 0.74,
    peerMismatchIndex: 0.88,
    expectedUsage: 516,
    observedUsage: 337,
    action: "Inspect illegal tap, bypass, tamper seal, and unregistered branch.",
  },
  {
    asset: "V01-P02",
    location: "High Ridge Branch, PRV V01 to Pressure P-02",
    pattern: "Pressure-driven leakage",
    nightFlowIndex: 0.72,
    pressureDropIndex: 0.86,
    billingGapIndex: 0.28,
    acousticIndex: 0.42,
    meterFailureIndex: 0.18,
    peerMismatchIndex: 0.24,
    expectedUsage: 638,
    observedUsage: 594,
    action: "Validate PRV setting and inspect old pipe bedding.",
  },
  {
    asset: "M11",
    location: "South Lane Meter Cluster M11",
    pattern: "Meter failure or bypass",
    nightFlowIndex: 0.44,
    pressureDropIndex: 0.12,
    billingGapIndex: 0.69,
    acousticIndex: 0.08,
    meterFailureIndex: 0.92,
    peerMismatchIndex: 0.81,
    expectedUsage: 286,
    observedUsage: 171,
    action: "Scan failed meters and compare customers with nearby similar users.",
  },
];

const usageForecasts = [
  ["Market traders", "Market Street M8", 516, 337, 462, "Under-use against peers"],
  ["Households", "East Road cluster", 824, 701, 789, "Demand suppressed by leakage risk"],
  ["High ridge homes", "High Ridge V01-P02", 638, 594, 612, "Pressure-sensitive demand"],
  ["South lane meters", "Meter Cluster M11", 286, 171, 251, "Zero-use meter cluster"],
];

const modelFeatureWeights = [
  ["Minimum night flow", 24, "hidden leakage and illegal continuous use"],
  ["Pressure drop", 18, "pipe burst and pressure-driven leakage"],
  ["Billing gap", 22, "commercial loss and unregistered consumption"],
  ["Acoustic noise", 16, "hidden leak on metallic mains"],
  ["Meter failures", 10, "stuck, bypassed, or dead customer meters"],
  ["Peer usage mismatch", 10, "customers using less than nearby similar users"],
];

const hybridLearningStages = [
  {
    stage: "Rule engine",
    state: "Live",
    color: "teal",
    input: "Known hydraulic thresholds: night flow, pressure band, zero-use meters",
    output: "Fast first-pass alerts with explainable causes",
  },
  {
    stage: "Anomaly detection",
    state: "Learning",
    color: "yellow",
    input: "Incoming flow, pressure, acoustic, billing, and meter-health streams",
    output: "Finds unusual patterns before labels exist",
  },
  {
    stage: "Supervised model",
    state: "Training",
    color: "quality",
    input: "Field-confirmed outcomes: leak, theft, bypass, meter fault, normal",
    output: "Improves probability scores after every closed case",
  },
  {
    stage: "Usage forecast",
    state: "Live",
    color: "blue",
    input: "Historical demand, customer type, peer group, day, pressure, weather proxy",
    output: "Expected consumption for each customer cluster",
  },
  {
    stage: "Feedback update",
    state: "Continuous",
    color: "green",
    input: "Photos, GPS, meter scan, repair result, notice, regularisation",
    output: "Updates weights, baselines, and future inspection ranking",
  },
];

const incomingLearningBatch = {
  telemetryEvents: 1842,
  fieldLabels: 17,
  correctedPredictions: 12,
  newBaselineShift: "+3.2%",
  nextRetrain: "Tonight 02:00",
};

const manualNotifications = [
  {
    id: "NTF-301",
    type: "Dispatch",
    color: "black",
    title: "Inspect Market Street V12-M8",
    detail: "Adaptive model flags illegal connection or bypass risk above dispatch threshold.",
    action: "Notify Team B and open mobile inspection case.",
    time: "Now",
    unread: true,
  },
  {
    id: "NTF-298",
    type: "Learning",
    color: "quality",
    title: "Hybrid model retrain scheduled",
    detail: "17 new field labels and 1,842 telemetry events are queued for baseline update.",
    action: "Review corrections before tonight's retrain.",
    time: "12 min",
    unread: true,
  },
];

let currentAlertFilter = "all";
const riskFeed = document.querySelector("#riskFeed");
const alertRows = document.querySelector("#alertRows");
const sensorRows = document.querySelector("#sensorRows");
const sensorSummary = document.querySelector("#sensorSummary");
const sensorHealthCards = document.querySelector("#sensorHealthCards");
const workOrders = document.querySelector("#workOrders");
const memberCards = document.querySelector("#memberCards");
const memberRows = document.querySelector("#memberRows");
const nightFlowChart = document.querySelector("#nightFlowChart");
const mapTooltip = document.querySelector("#mapTooltip");
const qualityTestsPanel = document.querySelector("#qualityTests");
const qualityDetail = document.querySelector("#qualityDetail");
const qualitySummary = document.querySelector("#qualitySummary");
const limitCards = document.querySelector("#limitCards");
const integrityList = document.querySelector("#integrityList");
const integrityStrip = document.querySelector("#integrityStrip");
const forecastChart = document.querySelector("#forecastChart");
const balanceList = document.querySelector("#balanceList");
const playbookList = document.querySelector("#playbookList");
const samplingChainPanel = document.querySelector("#samplingChain");
const lossAreaCards = document.querySelector("#lossAreaCards");
const areaRows = document.querySelector("#areaRows");
const fusionLanes = document.querySelector("#fusionLanes");
const priorityDecision = document.querySelector("#priorityDecision");
const assetRiskScoresPanel = document.querySelector("#assetRiskScores");
const priorityTarget = document.querySelector("#priorityTarget");
const leakagePredictionsPanel = document.querySelector("#leakagePredictions");
const usageForecastPanel = document.querySelector("#usageForecast");
const modelFeaturesPanel = document.querySelector("#modelFeatures");
const learningLoopPanel = document.querySelector("#learningLoop");
const notificationFeed = document.querySelector("#notificationFeed");
const notificationCount = document.querySelector("#notificationCount");
const toastStack = document.querySelector("#toastStack");
const topbar = document.querySelector("#topbar");
const topbarTitle = document.querySelector("#topbarTitle");
const topbarEyebrow = document.querySelector("#topbarEyebrow");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const loginUsername = document.querySelector("#loginUsername");
const logoutBtn = document.querySelector("#logoutBtn");
const shownToastIds = new Set();
const authSessionKey = "earthguardWaterOpsAuthenticated";
const authCredentials = {
  username: "Earthguard",
  password: "Dickens",
};

const viewHeaders = {
  overview: {
    title: "EarthGuard Water Command Center",
    eyebrow: "water.earthguardinnovation.org - Urban DMA-04",
  },
  alerts: {
    title: "Alert Register",
    eyebrow: "AI, hydraulic, commercial, quality, and device alerts",
  },
  gis: {
    title: "GIS Loss Areas",
    eyebrow: "DMA subareas, pipe routes, valves, and loss ranking",
  },
  sensors: {
    title: "Sensor Operations",
    eyebrow: "Device health, calibration, signal, and telemetry status",
  },
  quality: {
    title: "Water Quality Workflow",
    eyebrow: "Sampling chain, response rules, and contamination-risk handling",
  },
  members: {
    title: "Registered Members",
    eyebrow: "Customers, operators, priority users, and meter links",
  },
  works: {
    title: "Work Orders",
    eyebrow: "Mobile field response, closure, notices, and recovery actions",
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHtml(element, html) {
  if (element) element.innerHTML = html;
}

function unlockDashboard() {
  document.body.classList.remove("auth-locked");
  document.body.classList.add("auth-ready");
  if (loginError) loginError.textContent = "";
}

function lockDashboard() {
  localStorage.removeItem(authSessionKey);
  document.body.classList.add("auth-locked");
  document.body.classList.remove("auth-ready");
  loginForm?.reset();
  loginUsername?.focus();
}

function initializeAuth() {
  if (localStorage.getItem(authSessionKey) === "true") {
    unlockDashboard();
  } else {
    lockDashboard();
  }
}

function pill(label, color) {
  return `<span class="pill ${color}">${label}</span>`;
}

function money(value) {
  return `KES ${Number(value).toLocaleString("en-US")}`;
}

function riskPair(leakRisk, theftRisk) {
  return `
    <div class="risk-pair" aria-label="Leakage and theft risk">
      <span><b>Leakage</b>${leakRisk}/100</span>
      <span><b>Theft</b>${theftRisk}/100</span>
    </div>
  `;
}

function statusColor(status) {
  if (
    status === "Good" ||
    status === "Ready" ||
    status === "Online" ||
    status === "Stable" ||
    status === "Normal" ||
    status.startsWith("Within")
  ) return "green";
  if (
    status === "Monitor" ||
    status === "Needs check" ||
    status === "Needs audit" ||
    status === "Retest" ||
    status === "Retest required" ||
    status.toLowerCase().includes("monitor") ||
    status.toLowerCase().includes("check") ||
    status.toLowerCase().includes("audit") ||
    status.toLowerCase().includes("retest")
  ) return "yellow";
  return "red";
}

function batteryNumber(value) {
  return Number.parseInt(value, 10) || 0;
}

function signalNumber(value) {
  return Math.abs(Number.parseInt(value, 10) || 0);
}

function calibrationColor(calibration) {
  const lower = calibration.toLowerCase();
  if (calibration === "Calibrated") return "green";
  if (lower.includes("due")) return "yellow";
  return "red";
}

function integrityPill(label, color) {
  const background = color === "yellow" ? "#8a5b00" : "#087a4d";
  return `<span class="pill ${color} integrity-status-pill" style="background:${background}; color:#ffffff;">${label}</span>`;
}

function scoreColor(score) {
  if (score >= 85) return "red";
  if (score >= 70) return "yellow";
  if (score >= 55) return "teal";
  return "green";
}

function scoreBar(label, value) {
  return `
    <div class="score-bar">
      <span>${label}</span>
      <strong>${value}</strong>
      <div class="score-track">
        <i class="${scoreColor(value)}" style="width:${value}%"></i>
      </div>
    </div>
  `;
}

function priorityScore(item) {
  return Math.round(
    item.theftRisk * 0.35 +
    item.revenueRecovery * 0.35 +
    item.customerImpact * 0.15 +
    item.leakRisk * 0.1 +
    item.meterFault * 0.05
  );
}

function clampScore(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function leakagePredictionScore(sample) {
  return clampScore(
    sample.nightFlowIndex * 24 +
    sample.pressureDropIndex * 18 +
    sample.billingGapIndex * 22 +
    sample.acousticIndex * 16 +
    sample.meterFailureIndex * 10 +
    sample.peerMismatchIndex * 10
  );
}

function adaptiveConfidence(sample) {
  const dataFreshnessBoost = incomingLearningBatch.telemetryEvents > 1000 ? 3 : 1;
  const labelBoost = incomingLearningBatch.fieldLabels > 10 ? 4 : 2;
  const correctionPenalty = incomingLearningBatch.correctedPredictions > 15 ? -3 : 0;
  return clampScore(leakagePredictionScore(sample) + dataFreshnessBoost + labelBoost + correctionPenalty);
}

function usageGapScore(expected, observed) {
  return clampScore(((expected - observed) / expected) * 100);
}

function buildNotifications() {
  const modelNotifications = mlLeakageSamples
    .map((sample) => ({
      ...sample,
      adaptiveProbability: adaptiveConfidence(sample),
    }))
    .filter((sample) => sample.adaptiveProbability >= 80)
    .map((sample, index) => ({
      id: `ML-${index + 1}`,
      type: "ML risk",
      color: scoreColor(sample.adaptiveProbability),
      title: `${sample.asset}: ${sample.pattern}`,
      detail: `${sample.location} is at ${sample.adaptiveProbability}% adaptive risk after latest telemetry and field labels.`,
      action: sample.action,
      time: index === 0 ? "Now" : `${index * 4 + 3} min`,
      unread: true,
    }));

  const usageNotifications = usageForecasts
    .map(([cluster, location, expected, observed, forecast, reason]) => ({
      cluster,
      location,
      expected,
      observed,
      forecast,
      reason,
      gap: usageGapScore(expected, observed),
    }))
    .filter((item) => item.gap >= 25)
    .map((item, index) => ({
      id: `USE-${index + 1}`,
      type: "Usage gap",
      color: scoreColor(item.gap),
      title: `${item.cluster}: ${item.gap}% below expected`,
      detail: `${item.location} observed ${item.observed} m3/day against expected ${item.expected} m3/day.`,
      action: item.reason,
      time: `${index * 5 + 6} min`,
      unread: true,
    }));

  return [...manualNotifications, ...modelNotifications, ...usageNotifications];
}

function showNotificationPopups(limit = 3, force = false) {
  if (!toastStack) return;
  const notifications = buildNotifications()
    .filter((item) => item.unread)
    .slice(0, limit);

  notifications.forEach((item, index) => {
    if (!force && shownToastIds.has(item.id)) return;
    shownToastIds.add(item.id);

    const toast = document.createElement("article");
    toast.className = `toast-card ${item.color}`;
    toast.setAttribute("role", "status");
    toast.innerHTML = `
      <header>
        <div>
          <strong>${item.title}</strong>
          <span>${item.type} - ${item.time}</span>
        </div>
        <button class="toast-close" type="button" aria-label="Dismiss notification">x</button>
      </header>
      <p>${item.detail}</p>
      <small>${item.action}</small>
    `;

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.classList.add("closing");
      setTimeout(() => toast.remove(), 180);
    });

    toastStack.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 80 + index * 120);
    setTimeout(() => {
      toast.classList.add("closing");
      setTimeout(() => toast.remove(), 220);
    }, 9000 + index * 900);
  });
}

function renderAlerts() {
  if (!riskFeed || !alertRows) return;
  const visibleAlerts = currentAlertFilter === "all"
    ? alerts
    : alerts.filter((alert) => alert.risk === currentAlertFilter);

  riskFeed.innerHTML = alerts
    .filter((alert) => !alert.acknowledged)
    .slice(0, 4)
    .map(
      (alert) => `
        <article class="risk-card">
          <header>
            <strong>${alert.id} - ${alert.source}</strong>
            ${pill(alert.risk, alert.color)}
          </header>
          <p>${alert.cause}</p>
          ${riskPair(alert.leakRisk, alert.theftRisk)}
          <div class="money-strip">
            <span><b>${money(alert.revenueLossToday)}</b> loss today</span>
            <span><b>${money(alert.monthlyRecovery)}</b> monthly recovery</span>
            <span><b>${money(alert.annualRecovery)}</b> annual recovery</span>
          </div>
          <p><strong>Evidence strength:</strong> ${alert.evidenceStrength}</p>
          <p>${alert.action}</p>
        </article>
      `
    )
    .join("");

  alertRows.innerHTML = visibleAlerts
    .map(
      (alert) => `
        <tr class="${alert.acknowledged ? "muted-row" : ""}">
          <td>${alert.id}</td>
          <td>${pill(alert.risk, alert.color)}</td>
          <td>${alert.leakRisk}/100</td>
          <td>${alert.theftRisk}/100</td>
          <td>${pill(alert.evidenceStrength, alert.evidenceStrength === "High" ? "red" : alert.evidenceStrength === "Medium" ? "yellow" : "teal")}</td>
          <td>
            <strong>${money(alert.revenueLossToday)}</strong><br>
            <small>Monthly ${money(alert.monthlyRecovery)}</small><br>
            <small>Annual ${money(alert.annualRecovery)}</small>
          </td>
          <td>${alert.source}</td>
          <td>${alert.cause}</td>
          <td>${alert.action}</td>
          <td>${alert.status}</td>
          <td>
            ${
              alert.acknowledged
                ? "Acknowledged"
                : `<button class="row-button" data-ack-alert="${alert.id}" type="button">Acknowledge</button>`
            }
          </td>
        </tr>
      `
    )
    .join("");
}

function renderNotifications() {
  if (!notificationFeed || !notificationCount) return;
  const notifications = buildNotifications();
  const unreadCount = notifications.filter((item) => item.unread).length;
  notificationCount.textContent = unreadCount;

  notificationFeed.innerHTML = notifications
    .slice(0, 6)
    .map(
      (item) => `
        <article class="notification-card ${item.unread ? "unread" : ""}">
          <header>
            <div>
              <strong>${item.title}</strong>
              <span>${item.id} - ${item.type} - ${item.time}</span>
            </div>
            ${pill(item.type, item.color)}
          </header>
          <p>${item.detail}</p>
          <div class="field-action">
            <strong>Recommended action</strong>
            <span>${item.action}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function refreshDecisionFeeds() {
  renderAlerts();
  renderNotifications();
}

function renderRiskPriorities() {
  if (!priorityTarget || !priorityDecision || !assetRiskScoresPanel) return;
  const rankedAssets = [...assetRiskScores].sort((a, b) => priorityScore(b) - priorityScore(a));
  const topAsset = rankedAssets[0];
  const topAlert = alerts.find((alert) => alert.action.includes(topAsset.asset) || topAsset.location.includes(alert.source.replace("Smart meter ", ""))) || alerts[1];

  priorityTarget.textContent = topAsset.location;
  setText("#topCommand", `Inspect ${topAsset.location} now.`);
  setText("#topCommandDetail", `${topAsset.recommendation} Evidence strength: ${topAlert.evidenceStrength}. Leakage risk ${topAlert.leakRisk}/100. Theft risk ${topAlert.theftRisk}/100.`);
  setText("#topRevenueToday", money(topAlert.revenueLossToday));
  setText("#topMonthlyRecovery", money(topAlert.monthlyRecovery));
  setText("#topAnnualRecovery", money(topAlert.annualRecovery));
  priorityDecision.innerHTML = `
    <article class="priority-callout">
      <div class="probability-ring ${scoreColor(priorityScore(topAsset))}" style="--score:${priorityScore(topAsset)}">
        <strong>${priorityScore(topAsset)}%</strong>
        <span>priority</span>
      </div>
      <div>
        <span>${topAsset.class} ${topAsset.asset}</span>
        <strong>Go to ${topAsset.location} first.</strong>
        <p>This target has theft probability ${topAsset.theftRisk}/100 and recoverable revenue ${topAsset.revenueRecovery}/100.</p>
        <p>${topAsset.recommendation}</p>
        <div class="action-chips">
          <i>Navigate</i>
          <i>GPS</i>
          <i>Photos</i>
          <i>Meter scan</i>
          <i>Notice</i>
          <i>Disconnect or regularise</i>
        </div>
      </div>
    </article>
  `;

  assetRiskScoresPanel.innerHTML = rankedAssets
    .map(
      (item) => `
        <article class="asset-risk-card">
          <header>
            <div>
              <strong>${item.asset}</strong>
              <span>${item.class} - ${item.location}</span>
            </div>
            ${pill(`Priority ${priorityScore(item)}`, scoreColor(priorityScore(item)))}
          </header>
          <div class="score-grid">
            ${scoreBar("Leak", item.leakRisk)}
            ${scoreBar("Theft", item.theftRisk)}
            ${scoreBar("Meter fault", item.meterFault)}
            ${scoreBar("Customer impact", item.customerImpact)}
            ${scoreBar("Revenue recovery", item.revenueRecovery)}
          </div>
          <p>${item.recommendation}</p>
        </article>
      `
    )
    .join("");
}

function renderSensors() {
  const onlineCount = sensors.filter(([, , , , , , health]) => health === "Online").length;
  const attentionCount = sensors.filter(([, , , , , , health]) => health !== "Online").length;
  const calibrationQueue = sensors.filter(([, , , , , , , calibration]) => calibration !== "Calibrated").length;
  const weakestBattery = sensors.reduce((lowest, sensor) => (batteryNumber(sensor[3]) < batteryNumber(lowest[3]) ? sensor : lowest), sensors[0]);
  const weakestSignal = sensors.reduce((weakest, sensor) => (signalNumber(sensor[4]) > signalNumber(weakest[4]) ? sensor : weakest), sensors[0]);
  const liveRatio = Math.round((onlineCount / sensors.length) * 100);

  if (sensorSummary) {
    const summaryItems = [
      ["Total sensors", sensors.length, "Commissioned in DMA-04", "teal"],
      ["Online", onlineCount, `${liveRatio}% live telemetry`, "green"],
      ["Needs attention", attentionCount, "Health, validation, or retest", attentionCount ? "yellow" : "green"],
      ["Calibration queue", calibrationQueue, "Due, reagent, seal, or validation", calibrationQueue ? "yellow" : "green"],
      ["Lowest battery", weakestBattery[3], `${weakestBattery[0]} ${weakestBattery[1]}`, batteryNumber(weakestBattery[3]) < 70 ? "yellow" : "green"],
      ["Weakest signal", weakestSignal[4], `${weakestSignal[0]} last seen ${weakestSignal[5]}`, signalNumber(weakestSignal[4]) > 82 ? "yellow" : "green"],
    ];

    sensorSummary.innerHTML = summaryItems
      .map(
        ([label, value, detail, color]) => `
          <article class="sensor-summary-card ${color}">
            <span>${label}</span>
            <strong>${value}</strong>
            <small>${detail}</small>
          </article>
        `
      )
      .join("");
  }

  if (sensorHealthCards) {
    sensorHealthCards.innerHTML = sensors
      .map(([device, type, reading, battery, signal, lastSeen, health, calibration]) => {
        const healthClass = health === "Online" ? "green" : statusColor(health);
        const calibrationClass = calibrationColor(calibration);
        return `
          <article class="sensor-health-card ${healthClass}">
            <header>
              <div>
                <strong>${device}</strong>
                <span>${type}</span>
              </div>
              ${pill(health, healthClass)}
            </header>
            <p>${reading}</p>
            <div class="sensor-meta-grid">
              <span><b>Battery</b>${battery}</span>
              <span><b>Signal</b>${signal}</span>
              <span><b>Last seen</b>${lastSeen}</span>
              <span><b>Calibration</b>${pill(calibration, calibrationClass)}</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  if (sensorRows) {
    sensorRows.innerHTML = sensors
      .map(([device, type, reading, battery, signal, lastSeen, health, calibration]) => {
        const healthClass = health === "Online" ? "green" : statusColor(health);
        const calibrationClass = calibrationColor(calibration);
        return `
          <tr>
            <td>${device}</td>
            <td>${type}</td>
            <td>${reading}</td>
            <td>${battery}</td>
            <td>${signal}</td>
            <td>${lastSeen}</td>
            <td><span class="health" style="color: var(--${healthClass})">${health}</span></td>
            <td>${pill(calibration, calibrationClass)}</td>
          </tr>
        `;
      })
      .join("");
  }
}

function renderMembers() {
  if (!memberCards || !memberRows) return;
  const activeCount = registeredMembers.filter((member) => member.status === "Active").length;
  const reviewCount = registeredMembers.filter((member) => statusColor(member.status) === "yellow").length;
  setText("#memberValue", registeredMembers.length);
  const memberValue = document.querySelector("#memberValue");
  if (memberValue?.nextElementSibling) {
    memberValue.nextElementSibling.textContent = `${activeCount} active, ${reviewCount} need review`;
  }

  memberCards.innerHTML = registeredMembers
    .map(
      (member) => `
        <article class="member-card">
          <header>
            <div>
              <strong>${member.name}</strong>
              <span>${member.type} - ${member.zone}</span>
            </div>
            ${pill(member.status, member.color)}
          </header>
          <p>${member.account} linked to ${member.meter}</p>
          <p>${member.notes}</p>
        </article>
      `
    )
    .join("");

  memberRows.innerHTML = registeredMembers
    .map(
      (member) => `
        <tr>
          <td>${member.name}</td>
          <td>${member.type}</td>
          <td>${member.account}</td>
          <td>${member.meter}</td>
          <td>${member.zone}</td>
          <td>${pill(member.status, member.color)}</td>
          <td>${member.lastActivity}</td>
          <td>${member.notes}</td>
        </tr>
      `
    )
    .join("");
}

function renderWorks() {
  if (!workOrders) return;
  workOrders.innerHTML = works
    .map(
      (work) => `
        <article class="work-card">
          <header>
            <strong>${work.title}</strong>
            ${pill(work.status, work.color)}
          </header>
          <p>${work.text}</p>
        </article>
      `
    )
    .join("");
}

function renderChart() {
  if (!nightFlowChart) return;
  nightFlowChart.innerHTML = nightFlow
    .map(
      ([day, value]) => `
        <div class="bar">
          <span style="height:${value}%"></span>
          <span>${day}</span>
        </div>
      `
    )
    .join("");
}

function renderForecast() {
  if (!forecastChart) return;
  forecastChart.innerHTML = forecastRisk
    .map(
      ([time, risk, label, color]) => `
        <div class="forecast-step">
          <strong class="${color}" style="height:${risk}%">${label}</strong>
          <span>${time}</span>
        </div>
      `
    )
    .join("");
}

function renderQuality() {
  const cards = qualityTests
    .map(([name, reading, status, target]) => {
      const color = statusColor(status);
      return `
        <article class="quality-card">
          <header>
            <span>${name}</span>
            ${pill(status, color)}
          </header>
          <strong>${reading}</strong>
          <p>${target}</p>
        </article>
      `;
    })
    .join("");

  setHtml(qualityTestsPanel, cards);
  setHtml(qualityDetail, cards);
  setHtml(qualitySummary, qualityTests
    .map(([name, reading, status, target]) => {
      const color = statusColor(status);
      return `
        <article class="quality-summary-card">
          <header>
            <span>${name}</span>
            ${pill(status, color)}
          </header>
          <strong>${reading}</strong>
          <small>${target}</small>
        </article>
      `;
    })
    .join(""));
}

function renderLimits() {
  if (!limitCards) return;
  limitCards.innerHTML = controlLimits
    .map(
      ([name, value, detail]) => `
        <article class="limit-card">
          <span>${name}</span>
          <strong>${value}</strong>
          <small>${detail}</small>
        </article>
      `
    )
    .join("");
}

function renderIntegrity() {
  setHtml(integrityList, integrityChecks
    .map(
      ([name, status, color]) => `
        <article class="integrity-item">
          <strong>${name}</strong>
          ${integrityPill(status, color)}
        </article>
      `
    )
    .join(""));

  setHtml(integrityStrip, integrityChecks
    .map(
      ([name, status, color]) => `
        <article class="integrity-chip">
          <span>${name}</span>
          ${integrityPill(status, color)}
        </article>
      `
    )
    .join(""));
}

function renderWaterBalance() {
  if (!balanceList) return;
  balanceList.innerHTML = waterBalance
    .map(
      ([label, value, percent, color]) => `
        <article class="balance-item">
          <header>
            <strong>${label}</strong>
            <span>${value}</span>
          </header>
          <div class="progress-track">
            <span class="progress-fill ${color}" style="width:${percent}%"></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPlaybook() {
  setHtml(playbookList, playbook.map((step) => `<li>${step}</li>`).join(""));
  setHtml(samplingChainPanel, samplingChain.map((step) => `<div>${step}</div>`).join(""));
}

function renderFusionSignals() {
  if (!fusionLanes) return;
  fusionLanes.innerHTML = fusionSignals
    .map(
      ([name, detail, value, color]) => `
        <article class="fusion-lane">
          <header>
            <strong>${name}</strong>
            <span>${detail}</span>
          </header>
          <div class="fusion-track">
            <span class="fusion-fill ${color}" style="width:${value}%"></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderMlPredictions() {
  if (!leakagePredictionsPanel || !usageForecastPanel || !modelFeaturesPanel || !learningLoopPanel) return;

  const rankedPredictions = [...mlLeakageSamples]
    .map((sample) => ({
      ...sample,
      probability: leakagePredictionScore(sample),
      adaptiveProbability: adaptiveConfidence(sample),
    }))
    .sort((a, b) => b.probability - a.probability);

  leakagePredictionsPanel.innerHTML = rankedPredictions
    .map(
      (sample) => `
        <article class="prediction-card">
          <header>
            <div class="probability-ring small ${scoreColor(sample.adaptiveProbability)}" style="--score:${sample.adaptiveProbability}">
              <strong>${sample.adaptiveProbability}%</strong>
              <span>risk</span>
            </div>
            <div>
              <strong>${sample.asset}</strong>
              <span>${sample.location}</span>
            </div>
          </header>
          <div class="prediction-type">${sample.pattern}</div>
          <div class="learning-delta">Base model ${sample.probability}% -> adaptive model ${sample.adaptiveProbability}% after latest data batch</div>
          <div class="compact-score-row">
            ${scoreBar("Night flow", clampScore(sample.nightFlowIndex * 100))}
            ${scoreBar("Pressure", clampScore(sample.pressureDropIndex * 100))}
            ${scoreBar("Billing gap", clampScore(sample.billingGapIndex * 100))}
          </div>
          <div class="compact-score-row">
            ${scoreBar("Acoustic", clampScore(sample.acousticIndex * 100))}
            ${scoreBar("Meter fault", clampScore(sample.meterFailureIndex * 100))}
            ${scoreBar("Peer gap", clampScore(sample.peerMismatchIndex * 100))}
          </div>
          <p>${sample.action}</p>
        </article>
      `
    )
    .join("");

  usageForecastPanel.innerHTML = usageForecasts
    .map(([cluster, location, expected, observed, forecast, reason]) => {
      const gap = usageGapScore(expected, observed);
      const observedPercent = clampScore((observed / expected) * 100);
      const forecastPercent = clampScore((forecast / expected) * 100);
      return `
        <article class="usage-card">
          <header>
            <div>
              <strong>${cluster}</strong>
              <span>${location}</span>
            </div>
            ${pill(`${gap}% gap`, scoreColor(gap))}
          </header>
          <div class="usage-bars">
            <div>
              <span>Expected</span>
              <i class="expected" style="width:100%"></i>
              <b>${expected} m3/day</b>
            </div>
            <div>
              <span>Observed</span>
              <i class="observed ${scoreColor(gap)}" style="width:${observedPercent}%"></i>
              <b>${observed} m3/day</b>
            </div>
            <div>
              <span>Next 24h</span>
              <i class="forecasted" style="width:${forecastPercent}%"></i>
              <b>${forecast} m3/day</b>
            </div>
          </div>
          <p>${reason}</p>
        </article>
      `;
    })
    .join("");

  modelFeaturesPanel.innerHTML = modelFeatureWeights
    .map(
      ([name, weight, purpose]) => `
        <article class="feature-weight">
          <header>
            <strong>${name}</strong>
            <span>${weight}%</span>
          </header>
          <div class="fusion-track">
            <span class="fusion-fill ${scoreColor(weight * 4)}" style="width:${weight}%"></span>
          </div>
          <p>${purpose}</p>
        </article>
      `
    )
    .join("");

  learningLoopPanel.innerHTML = `
    <div class="learning-summary">
      <div><strong>${incomingLearningBatch.telemetryEvents}</strong><span>new telemetry events</span></div>
      <div><strong>${incomingLearningBatch.fieldLabels}</strong><span>field labels added</span></div>
      <div><strong>${incomingLearningBatch.correctedPredictions}</strong><span>predictions corrected</span></div>
      <div><strong>${incomingLearningBatch.nextRetrain}</strong><span>next retrain</span></div>
    </div>
    <div class="learning-stages">
      ${hybridLearningStages
        .map(
          (stage) => `
            <article class="learning-stage">
              <header>
                <strong>${stage.stage}</strong>
                ${pill(stage.state, stage.color)}
              </header>
              <p>${stage.input}</p>
              <span>${stage.output}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLossAreas() {
  if (!lossAreaCards || !areaRows) return;
  lossAreaCards.innerHTML = lossAreas
    .map(
      (zone) => `
        <article class="loss-area-card">
          <header>
            <div class="probability-ring small ${zone.color}" style="--score:${Number.parseInt(zone.confidence, 10)}">
              <strong>${zone.confidence}</strong>
              <span>case</span>
            </div>
            <div>
              <strong>${zone.id} - ${zone.area}</strong>
              ${pill(zone.type, zone.color)}
            </div>
          </header>
          <div class="case-strip">
            <span><b>${zone.loss}</b> estimated loss</span>
            <span><b>${zone.customers}</b> customers</span>
            <span><b>${money(zone.revenueLossToday)}</b> revenue loss today</span>
            <span><b>${money(zone.monthlyRecovery)}</b> monthly recovery</span>
          </div>
          <div class="compact-score-row">
            ${scoreBar("Leak", zone.leakRisk)}
            ${scoreBar("Theft", zone.theftRisk)}
            ${scoreBar("Recovery", zone.revenueRecovery)}
          </div>
          <p>${zone.evidence}</p>
          <div class="field-action">
            <strong>Field action</strong>
            <span>${zone.action}</span>
          </div>
        </article>
      `
    )
    .join("");

  areaRows.innerHTML = lossAreas
    .map(
      (zone) => `
        <tr>
          <td>${zone.id} - ${zone.area}</td>
          <td>${pill(zone.type, zone.color)}</td>
          <td>${zone.loss}</td>
          <td>${money(zone.revenueLossToday)}</td>
          <td>${money(zone.monthlyRecovery)}</td>
          <td>${money(zone.annualRecovery)}</td>
          <td>${zone.theftRisk}/100</td>
          <td>${zone.meterFault}/100</td>
          <td>${zone.customerImpact}/100</td>
          <td>${zone.revenueRecovery}/100</td>
          <td>${zone.customers}</td>
          <td>${zone.confidence}</td>
          <td>${zone.evidence}</td>
          <td>${zone.action}</td>
        </tr>
      `
    )
    .join("");
}

function exportAlerts() {
  const header = ["Alert", "Risk", "Leakage risk", "Theft risk", "Evidence strength", "Revenue loss today", "Monthly recovery", "Annual recovery", "Source", "Likely cause", "Action", "Status", "Acknowledged"];
  const rows = alerts.map((alert) => [
    alert.id,
    alert.risk,
    alert.leakRisk,
    alert.theftRisk,
    alert.evidenceStrength,
    alert.revenueLossToday,
    alert.monthlyRecovery,
    alert.annualRecovery,
    alert.source,
    alert.cause,
    alert.action,
    alert.status,
    alert.acknowledged ? "Yes" : "No",
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "earthguard-water-alerts.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function updateMetrics() {
  const flow = 109 + Math.random() * 8;
  const pressure = 30 + Math.random() * 4;
  const nrw = 37.8 + Math.random() * 1.5;
  const quality = 90 + Math.random() * 5;
  const twin = 85 + Math.random() * 5;
  setText("#flowValue", `${flow.toFixed(1)} m3/h`);
  setText("#pressureValue", `${pressure.toFixed(1)} m`);
  setText("#nrwValue", `${nrw.toFixed(1)}%`);
  setText("#qualityValue", `${quality.toFixed(0)}`);
  setText("#twinConfidence", `${twin.toFixed(0)}%`);
  setText("#lastSync", `${Math.floor(8 + Math.random() * 18)} sec`);
}

function movePanelsToTabs() {
  document.querySelectorAll("[data-move-to]").forEach((panel) => {
    const target = document.querySelector(`#${panel.dataset.moveTo}Panels`);
    if (target) target.appendChild(panel);
  });
}

function updateTopbar(viewId) {
  const header = viewHeaders[viewId] || viewHeaders.overview;
  if (topbarTitle) topbarTitle.textContent = header.title;
  if (topbarEyebrow) topbarEyebrow.textContent = header.eyebrow;
  topbar?.classList.toggle("compact", viewId !== "overview");
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");

  if (username === authCredentials.username && password === authCredentials.password) {
    localStorage.setItem(authSessionKey, "true");
    unlockDashboard();
    return;
  }

  if (loginError) loginError.textContent = "Incorrect username or password.";
});

logoutBtn?.addEventListener("click", () => {
  lockDashboard();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    const targetView = document.getElementById(button.dataset.view);
    if (!targetView) return;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    button.classList.add("active");
    targetView.classList.add("active");
    updateTopbar(button.dataset.view);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  });
});

document.querySelectorAll(".map-node").forEach((node) => {
  node.addEventListener("click", () => {
    if (mapTooltip) mapTooltip.textContent = node.dataset.node;
  });
});

document.querySelectorAll(".loss-zone").forEach((zone) => {
  zone.addEventListener("click", () => {
    if (mapTooltip) mapTooltip.textContent = zone.dataset.zone;
  });
});

document.querySelector("#simulateBtn")?.addEventListener("click", () => {
  const id = `ALT-${Math.floor(1100 + Math.random() * 70)}`;
  alerts.unshift({
    id,
    risk: "Quality",
    color: "quality",
    source: "Quality Q-02",
    cause: "Residual chlorine dropped below the normal operating band",
    action: "Dispatch team for chlorine retest, flushing check, and contamination inspection",
    status: "New",
    acknowledged: false,
  });
  manualNotifications.unshift({
    id: `NTF-${Math.floor(400 + Math.random() * 90)}`,
    type: "Quality alert",
    color: "quality",
    title: "Quality alert simulated",
    detail: "Residual chlorine dropped below normal operating band at Q-02.",
    action: "Dispatch team for chlorine retest, flushing check, and contamination inspection.",
    time: "Now",
    unread: true,
  });
  setText("#dmaStatus", "Yellow");
  setText("#qualityValue", "78");
  const workValue = document.querySelector("#workValue");
  if (workValue) {
    workValue.textContent = `${Number.parseInt(workValue.textContent, 10) + 1}`;
  }
  refreshDecisionFeeds();
  showNotificationPopups(2, true);
});

document.querySelectorAll("[data-alert-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    currentAlertFilter = button.dataset.alertFilter;
    document.querySelectorAll("[data-alert-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    refreshDecisionFeeds();
  });
});

alertRows?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ack-alert]");
  if (!button) return;
  const alert = alerts.find((item) => item.id === button.dataset.ackAlert);
  if (!alert) return;
  alert.acknowledged = true;
  alert.status = "Acknowledged";
  refreshDecisionFeeds();
});

document.querySelector("#exportAlertsBtn")?.addEventListener("click", exportAlerts);

initializeAuth();
movePanelsToTabs();
refreshDecisionFeeds();
showNotificationPopups();
renderRiskPriorities();
renderSensors();
renderMembers();
renderWorks();
renderChart();
renderForecast();
renderQuality();
renderLimits();
renderIntegrity();
renderWaterBalance();
renderPlaybook();
renderFusionSignals();
renderMlPredictions();
renderLossAreas();
setInterval(updateMetrics, 3500);
