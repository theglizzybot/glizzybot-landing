# Glizzy Landing Page

Static landing page for `glizzybot.app` (HTML, CSS and JavaScript with no build step).

## Before going live

1. In [`config.js`](./config.js), replace `YOUR_DISCORD_CLIENT_ID`, `YOUR_SUPPORT_INVITE` and the Ryzehosting affiliate URL.
2. Complete the legal details in [`impressum/index.html`](./impressum/index.html) and [`datenschutz/index.html`](./datenschutz/index.html).
3. Point the domain to this directory. No `.env` file or backend data is required.

## Local testing

A static server is enough for local testing, for example `npx serve .` in this directory.

## Nginx

The [`deploy/nginx.conf.example`](./deploy/nginx.conf.example) template uses `/var/www/main` for
`glizzybot.app` and redirects HTTP to HTTPS. Make sure the certificate paths exist, then run
`nginx -t` and reload Nginx.
