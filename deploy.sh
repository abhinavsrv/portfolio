#!/bin/bash

# GitHub Pages Deployment Script for Portfolio Website
# This script automates the process of deploying your portfolio website to GitHub Pages

echo "🚀 Starting GitHub Pages deployment process..."

# Check if repository name is provided
if [ -z "$1" ]; then
  echo "Please provide your GitHub repository name as an argument."
  echo "Usage: ./deploy.sh repository-name"
  exit 1
fi

REPO_NAME=$1
GITHUB_USERNAME="abhinavsrv"
GITHUB_PAGES_URL="https://$GITHUB_USERNAME.github.io/$REPO_NAME"

echo "📦 Installing dependencies..."
npm install
npm install --save-dev gh-pages

# Update package.json with GitHub Pages configuration
echo "⚙️ Configuring package.json for GitHub Pages..."
# Check if jq is installed
if ! command -v jq &> /dev/null; then
  echo "jq is not installed. Using sed instead."
  # Add homepage if it doesn't exist
  if ! grep -q '"homepage":' package.json; then
    sed -i 's/"name": "portfolio_website"/"name": "portfolio_website",\n  "homepage": "https:\/\/'"$GITHUB_USERNAME"'.github.io\/'"$REPO_NAME"'"/' package.json
  fi
  
  # Add deploy scripts if they don't exist
  if ! grep -q '"predeploy":' package.json; then
    sed -i 's/"scripts": {/"scripts": {\n    "predeploy": "npm run build",\n    "deploy": "gh-pages -d dist",/' package.json
  fi
else
  # Use jq to modify package.json
  jq '.homepage = "https://'"$GITHUB_USERNAME"'.github.io/'"$REPO_NAME"'"' package.json > package.json.tmp
  mv package.json.tmp package.json
  
  jq '.scripts += {"predeploy": "npm run build", "deploy": "gh-pages -d dist"}' package.json > package.json.tmp
  mv package.json.tmp package.json
fi

echo "🔨 Building the project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "Your website will be available at: $GITHUB_PAGES_URL"
echo ""
echo "Important: Make sure to configure your GitHub repository settings:"
echo "1. Go to your repository on GitHub"
echo "2. Navigate to Settings > Pages"
echo "3. Set the source to the 'gh-pages' branch"
echo ""
echo "Thank you for using this deployment script!"
