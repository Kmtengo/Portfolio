# Deployment Guide - Render Cloud

## Prerequisites
- GitHub repository with the portfolio code
- Render account (https://render.com)

## Option A: Direct Node.js Deployment (Recommended)

### render.yaml (Infrastructure as Code)
The `render.yaml` file at the project root configures automatic deployment:

```yaml
services:
  - type: web
    name: qurlarmah-portfolio
    runtime: node
    buildCommand: pnpm install && pnpm build
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
    plan: free
```

### Steps
1. Push code to GitHub repository
2. Go to Render dashboard: https://dashboard.render.com
3. Click **New** > **Web Service**
4. Connect your GitHub repository
5. Configure:
   - **Name**: `qurlarmah-portfolio`
   - **Runtime**: Node
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Plan**: Free (or Starter for better performance)
6. Click **Create Web Service**
7. Wait for the first deploy to complete

### Custom Domain
1. In Render dashboard, go to your service > **Settings** > **Custom Domains**
2. Add your domain (e.g., `qurlarmah.dev`)
3. Update your DNS records as instructed by Render
4. SSL certificate is provisioned automatically

### Auto-Deploy
- Render auto-deploys on every push to the `main` branch by default
- Configure branch in service settings if needed

## Option B: Docker Deployment

### Dockerfile
The `Dockerfile` at the project root enables containerized deployment:

```dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### Steps
1. In Render dashboard, create a new **Web Service**
2. Connect GitHub repo
3. Select **Docker** as the runtime
4. Render will automatically detect and use the Dockerfile
5. Deploy

## Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Production mode |
| `PORT` | `3000` | Server port |

## Performance Notes
- The portfolio uses heavy WebGL/Three.js assets. Ensure the `.glb` 3D model is Draco-compressed and under 2MB
- Images should be optimized before deployment (use Next.js Image optimization or pre-compress)
- Lighthouse score target: 90+ on desktop, 80+ on mobile
- Free tier on Render may have cold starts (~30s). Consider Starter plan for always-on

## CI/CD Pipeline (GitHub Actions)

For automated testing before deployment, add `.github/workflows/ci.yml`:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
      - run: pnpm lint
```
