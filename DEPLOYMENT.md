# Deployment Guide

This guide explains how to deploy your Currency Exchange Converter app through Git.

## Option 1: Vercel (Recommended - Easiest)

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign in with your GitHub account

3. **Import your project**:
   - Click "Add New Project"
   - Select your repository: `andixeneize/ppi-beta`
   - Vercel will auto-detect it's a Vite project

4. **Deploy**:
   - Click "Deploy" (default settings work fine)
   - Your site will be live in ~2 minutes!

5. **Automatic deployments**:
   - Every push to `main` branch will automatically deploy
   - You'll get a unique URL like: `https://ppi-beta-xyz.vercel.app`

### Custom Domain (Optional):
- In Vercel dashboard → Settings → Domains
- Add your custom domain

---

## Option 2: Netlify

### Steps:

1. **Push your code to GitHub** (if not already done)

2. **Go to Netlify**:
   - Visit https://netlify.com
   - Sign in with your GitHub account

3. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Select your repository: `andixeneize/ppi-beta`

4. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

5. **Automatic deployments**:
   - Every push to `main` branch will automatically deploy

---

## Option 3: GitHub Pages

For GitHub Pages, you'll need to:
1. Set up a GitHub Actions workflow (see `.github/workflows/deploy.yml`)
2. Configure GitHub Pages in repository settings
3. Set the base path in `vite.config.ts`

See the GitHub Actions workflow file for details.

---

## Quick Start (Vercel - Recommended)

The fastest way to deploy:

1. Make sure your code is pushed to GitHub
2. Visit: https://vercel.com/new
3. Import `andixeneize/ppi-beta`
4. Click Deploy
5. Done! 🎉

Your site will be live and automatically update on every git push.
