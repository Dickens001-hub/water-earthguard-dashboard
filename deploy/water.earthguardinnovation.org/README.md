# water.earthguardinnovation.org Deployment Package

This folder prepares the dashboard for deployment under:

`https://water.earthguardinnovation.org`

## Vercel DNS Record

Where `earthguardinnovation.org` DNS is managed, add:

```txt
Type: CNAME
Name: water
Value: cname.vercel-dns.com
TTL: Auto
```

Then add `water.earthguardinnovation.org` as a custom domain on the Vercel project that hosts the dashboard.

## Files to Publish

Publish these files from this folder:

- `index.html`
- `dashboard.html`
- `dashboard.css`
- `dashboard.js`
- `vercel.json`

## Local Preview

From the project root:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open:

```txt
http://127.0.0.1:8765/dashboard.html
```
