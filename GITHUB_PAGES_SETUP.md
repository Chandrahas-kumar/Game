# GitHub Pages Setup - Fix Production Issues

## Issue: Site Not Found

If your GitHub Pages site shows "Site not found", follow these steps:

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/Chandrahas-kumar/Game
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for GitHub to build your site

## Step 2: Verify Files

Make sure these files are in the root of your repository:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `game.js`
- ✅ `.nojekyll` (prevents Jekyll processing)

## Step 3: Check Your Site

After enabling Pages, your site will be available at:
**https://chandrahas-kumar.github.io/Game/**

Note: It may take a few minutes to become available after first enabling.

## Common Issues & Fixes

### Issue: 404 Error
- **Fix**: Make sure `index.html` is in the root directory
- **Fix**: Verify GitHub Pages is enabled in Settings → Pages

### Issue: Styles/JS Not Loading
- **Fix**: Check that file paths are relative (e.g., `href="styles.css"` not `href="/styles.css"`)
- **Fix**: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Site Shows "Site not found"
- **Fix**: Enable GitHub Pages in repository Settings
- **Fix**: Make sure you're using the correct branch (`main`)
- **Fix**: Wait a few minutes for GitHub to build the site

## Verify Your Setup

Run this to check if files are correct:
```bash
ls -la index.html styles.css game.js .nojekyll
```

All files should exist in the root directory.

