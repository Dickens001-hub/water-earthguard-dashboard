# water.earthguardinnovations.org Deployment Package

This folder prepares the dashboard for deployment under the active Truehost domain:

`https://water.earthguardinnovations.org`

## Truehost Finding

The active domain visible in Truehost is `earthguardinnovations.org`.

The domain nameservers are set to:

```txt
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Truehost DNS Manager reports:

```txt
You cannot edit this DNS zone because it has been terminated on the server
```

That means the DNS record for `water.earthguardinnovations.org` must be created in Vercel DNS, not Truehost, unless the domain nameservers are changed back to a Truehost DNS service.

## Vercel DNS Record

In Vercel, add:

```txt
Type: CNAME
Name: water
Value: cname.vercel-dns.com
```

Then add `water.earthguardinnovations.org` as a custom domain on the Vercel project that hosts the dashboard.

## Files to Publish

Upload these dashboard files to the hosting project:

- `dashboard.html`
- `dashboard.css`
- `dashboard.js`

On most hosts, rename `dashboard.html` to `index.html` so the subdomain opens the dashboard directly.

## Local Preview

From the project root:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open:

```txt
http://127.0.0.1:8765/dashboard.html
```

