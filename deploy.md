# Deployment Guide

Your Tic Tac Toe game is ready to deploy! Here are several deployment options:

## Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tic Tac Toe game"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Select source branch: `main`
   - Select folder: `/ (root)`
   - Click Save
   - Your game will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Option 2: Netlify (Free & Fast)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

   Or drag and drop the folder at: https://app.netlify.com/drop

## Option 3: Vercel (Free & Fast)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Option 4: Local Testing

The game is currently running on: **http://localhost:8000**

To stop the server, press Ctrl+C in the terminal.

## Quick Deploy Script

Run this to quickly set up for GitHub Pages:

```bash
chmod +x deploy.sh
./deploy.sh
```


