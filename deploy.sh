#!/bin/bash

echo "🚀 Tic Tac Toe Game Deployment Setup"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Deploy Tic Tac Toe game"
    echo "✅ Changes committed"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Create a repository on GitHub"
echo "2. Run: git remote add origin YOUR_REPO_URL"
echo "3. Run: git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"
echo ""
echo "Or deploy to Netlify/Vercel using their CLI tools."
echo "See deploy.md for detailed instructions."


