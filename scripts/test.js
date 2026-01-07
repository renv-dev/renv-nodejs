const execSync = require('child_process').execSync;

// build
execSync('npm run build', { stdio: 'inherit' });

// test
execSync('cd test && node ./src/index.js && cd ../', { stdio: 'inherit' });