#!/usr/bin/env node

/**
 * Post-build script to fix deployment structure
 * 
 * This script copies files from dist/public/ to dist/ to match
 * the deployment configuration that expects index.html in the root
 * of the public directory (dist/) rather than nested in dist/public/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(distPath, 'public');

console.log('🔧 Fixing deployment structure...');

// Check if dist/public exists
if (!fs.existsSync(publicPath)) {
  console.log('❌ dist/public directory not found. Run `npm run build` first.');
  process.exit(1);
}

// Copy all files from dist/public to dist
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    fs.readdirSync(src).forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // Copy files from dist/public/* to dist/
  fs.readdirSync(publicPath).forEach(file => {
    const srcPath = path.join(publicPath, file);
    const destPath = path.join(distPath, file);
    
    // Skip if file already exists in dist (like index.js from server build)
    if (file !== 'public' && !fs.existsSync(destPath)) {
      copyRecursive(srcPath, destPath);
    }
  });
  
  console.log('✅ Deployment structure fixed!');
  console.log('📁 Files are now in dist/ ready for deployment');
  
  // List the final structure
  console.log('\n📋 Final dist/ structure:');
  fs.readdirSync(distPath).forEach(file => {
    console.log(`   ${file}`);
  });
  
} catch (error) {
  console.error('❌ Error fixing deployment structure:', error);
  process.exit(1);
}