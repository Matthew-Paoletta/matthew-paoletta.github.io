# GitHub Pages Deployment Guide

Your portfolio is now configured to deploy to `matthew-paoletta.github.io` automatically!

## What was configured:

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds your site when you push to the `main` branch
   - Deploys to GitHub Pages automatically
   - Uses pnpm for fast, reliable builds

2. **Build Configuration** (`vite.config.ts`)
   - Added base URL configuration for GitHub Pages
   - Client-side build optimized for static hosting

3. **GitHub Pages Configuration** (`.nojekyll`)
   - Disables Jekyll processing to ensure your React app works correctly
   - Placed in public folder and copied to dist during build

## How to Deploy:

### Option 1: Automatic Deployment (Recommended)
Simply push to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will automatically:
- Build your site
- Deploy to GitHub Pages
- Your site will be live at `https://matthew-paoletta.github.io`

### Option 2: Manual Deployment
If you need to build locally:
```bash
# Install dependencies
pnpm install

# Build the client
pnpm run build:client

# The built files are in dist/spa/
# These get deployed to GitHub Pages by the workflow
```

## GitHub Pages Settings:

Your repository should have these settings:
- **Branch:** main (workflow will deploy to gh-pages automatically)
- **Folder:** / (root of gh-pages branch)
- **CNAME:** (optional, only if using a custom domain)

## Site URL:
- https://matthew-paoletta.github.io

## Troubleshooting:

### Site not updating?
1. Check the "Actions" tab in your GitHub repository
2. Look for the "Deploy to GitHub Pages" workflow
3. Click the latest run to see build logs
4. Common issues:
   - Dependencies not installed: `pnpm install`
   - Vite version mismatch: `pnpm update`
   - Hard refresh your browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

### 404 errors on refresh?
- This is a React Router issue. The workflow and config handle this with GitHub Pages configuration.
- Ensure `.nojekyll` file exists in the dist/spa folder after build

### Custom domain?
1. Add a CNAME file with your domain in the `public/` folder
2. Configure DNS settings with your domain provider
3. Update repository settings under "Pages"

## Rollback:

If something breaks:
1. Go to repository "Actions" tab
2. Find the failed workflow
3. Check the error logs
4. Fix the issue and push again

The previous build is preserved in Git history, so you can always revert.
