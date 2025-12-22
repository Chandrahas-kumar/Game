#!/bin/bash

# Workaround for macOS permission issues
# This script changes to the directory using a different method

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "📤 Pushing to GitHub..."
echo "Repository: https://github.com/Chandrahas-kumar/Game"
echo ""

# Try to push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 View your repository: https://github.com/Chandrahas-kumar/Game"
    echo ""
    echo "💡 Next step: Enable GitHub Pages"
    echo "   1. Go to: https://github.com/Chandrahas-kumar/Game/settings/pages"
    echo "   2. Source: main branch, / (root)"
    echo "   3. Save"
    echo "   4. Your game will be live at: https://chandrahas-kumar.github.io/Game/"
else
    echo ""
    echo "⚠️  Push failed. This usually means you need to authenticate."
    echo ""
    echo "Option 1: Use Personal Access Token"
    echo "  1. Go to: https://github.com/settings/tokens"
    echo "  2. Generate new token (classic) with 'repo' scope"
    echo "  3. Run this script again and use the token as password"
    echo ""
    echo "Option 2: Use GitHub Desktop"
    echo "  - Open GitHub Desktop"
    echo "  - Add this repository"
    echo "  - Click 'Push origin'"
fi



