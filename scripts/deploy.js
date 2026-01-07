const fs = require('fs');
const execSync = require('child_process').execSync;

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const version = packageJson.version;

// rewrite version in package.json
const lastNum = version.split('.').pop();
const newVersion = version.replace(/\d+$/, String(Number(lastNum) + 1));
packageJson.version = newVersion;
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8');

// build
execSync('npm run build', { stdio: 'inherit' });

// publish
execSync('npm publish', { stdio: 'inherit' });