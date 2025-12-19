const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying package build...');

// Check that all required files exist
const requiredFiles = [
  'dist/index.js',
  'dist/index.mjs', 
  'dist/index.d.ts'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

// Check that we have the expected number of .d.ts files
const dtsFiles = [];
function findDtsFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findDtsFiles(fullPath);
    } else if (file.endsWith('.d.ts')) {
      dtsFiles.push(fullPath);
    }
  });
}

findDtsFiles('dist');
console.log(`📄 Found ${dtsFiles.length} TypeScript declaration files`);

if (dtsFiles.length < 14) {
  console.error(`❌ Expected at least 14 .d.ts files, found ${dtsFiles.length}`);
  allFilesExist = false;
} else {
  console.log('✅ All TypeScript declarations present');
}

// Check package.json configuration
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const checks = [
  { key: 'main', expected: 'dist/index.js' },
  { key: 'module', expected: 'dist/index.mjs' },
  { key: 'types', expected: 'dist/index.d.ts' }
];

let configValid = true;
checks.forEach(check => {
  if (packageJson[check.key] !== check.expected) {
    console.error(`❌ package.json ${check.key}: expected "${check.expected}", got "${packageJson[check.key]}"`);
    configValid = false;
  } else {
    console.log(`✅ package.json ${check.key}: ${check.expected}`);
  }
});

// Check React 19 support
const reactDep = packageJson.peerDependencies?.react;
if (!reactDep || !reactDep.includes('^19.0.0')) {
  console.error(`❌ React 19 not supported in peerDependencies: ${reactDep}`);
  configValid = false;
} else {
  console.log('✅ React 19 supported');
}

if (allFilesExist && configValid) {
  console.log('\n🎉 Package build verification PASSED!');
  process.exit(0);
} else {
  console.log('\n💥 Package build verification FAILED!');
  process.exit(1);
}
