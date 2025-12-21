#!/bin/bash

echo "🚀 Push Tic Tac Toe Game to GitHub"
echo "===================================="
echo ""

# Check if remote already exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already configured:"
    git remote -v
    echo ""
    read -p "Push to existing remote? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        echo "✅ Push complete!"
        exit 0
    fi
fi

# Get repository URL
echo "📝 Please provide your GitHub repository URL"
echo "   Example: https://github.com/username/repo-name.git"
echo ""
read -p "GitHub repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No URL provided. Exiting."
    exit 1
fi

# Add remote and push
echo ""
echo "🔗 Adding remote repository..."
git remote add origin "$repo_url"

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your repository is now live at:"
    echo "   $(echo $repo_url | sed 's/\.git$//')"
    echo ""
    echo "💡 To enable GitHub Pages:"
    echo "   1. Go to your repository on GitHub"
    echo "   2. Settings → Pages"
    echo "   3. Source: main branch, / (root)"
    echo "   4. Save"
else
    echo "❌ Push failed. Please check your repository URL and permissions."
fi

