const fs = require('fs');
const path = require('path');

const src = path.resolve('src', 'data-files');
const dest = path.resolve('dist', 'data-files');

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.cpSync(src, dest, { recursive: true });

