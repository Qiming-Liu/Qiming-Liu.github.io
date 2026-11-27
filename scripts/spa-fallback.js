// GitHub Pages has no SPA rewrites. Serve the app for unknown paths so deep
// links like /some-page load the router instead of the GitHub 404 page.
import { copyFileSync } from 'node:fs';

copyFileSync('build/index.html', 'build/404.html');
