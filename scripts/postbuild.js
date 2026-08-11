const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

const standaloneDir = path.join(process.cwd(), '.next', 'standalone');
if (fs.existsSync(standaloneDir)) {
  console.log('Copying public assets to standalone bundle...');
  copyRecursiveSync(path.join(process.cwd(), 'public'), path.join(standaloneDir, 'public'));
  copyRecursiveSync(path.join(process.cwd(), '.next', 'static'), path.join(standaloneDir, '.next', 'static'));
  console.log('Successfully bundled public & static assets for standalone server!');
}
