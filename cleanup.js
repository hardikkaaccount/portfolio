// Cleanup script to remove unused 3D models and assets
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of directories to remove
const dirsToRemove = [
  // Keep the astro directory since it might be used by TicofabCanvas
  // but we're not using it anymore with SplineScene
  path.join(__dirname, 'public', 'astro'),
  
  // Remove planet directory as it's not being used
  path.join(__dirname, 'public', 'planet'),
];

// Function to remove directory recursively
function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    console.log(`Removing directory: ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
    console.log(`Successfully removed: ${dirPath}`);
  } else {
    console.log(`Directory does not exist: ${dirPath}`);
  }
}

// Remove directories
dirsToRemove.forEach(dir => {
  removeDirectory(dir);
});

console.log('Cleanup completed!');