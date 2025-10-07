# EchoPredict (Netlify-ready, dark theme)

This is a deployable scaffold with monetization hooks. Add your keys in Netlify env vars and deploy.

## Quick Start
1. Push this folder to a GitHub repo.
2. In Netlify → Add New Site → Import from Git → select repo → Deploy Site.
3. Set environment variables from `.env.local.example`.
4. Hit `/dashboard` (site works), `/admin/metrics` (after keys), and test cron endpoints.

## Cron on Netlify (GitHub Actions)
- Add repo secret: `NETLIFY_BASE_URL=https://yourname.netlify.app`
- Workflow in `.github/workflows/echo_crons.yml` pings your API routes on schedule.
