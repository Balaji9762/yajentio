const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist', 'yta-portal');
const filesToCopy = ['.htaccess', 'web.config'];

// Create dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
  console.log('Dist folder not found. Please run "ng build" first.');
  process.exit(1);
}

// Copy server configuration files
filesToCopy.forEach(file => {
  const srcFile = path.join(__dirname, '..', file);
  const destFile = path.join(distPath, file);
  
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`✓ Copied ${file} to dist folder`);
  } else {
    console.log(`⚠ Warning: ${file} not found in project root`);
  }
});

console.log('Server configuration files copied successfully!');

