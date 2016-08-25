Package.describe({
  name: 'scannerjs:scanner.js',
  version: '0.0.1',
  summary: 'ScannerJS: JavaScript web scan JPG PDF images from TWAIN WIA scanners in browser (Chrome, Edge, Firefox or IE)',
  git: 'https://github.com/Asprise/scannerjs.javascript-scanner-web-twain-wia-browsers-scanner.js',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles([
    'dist/scanner.js',
	'dist/scannerjs.css',
	'dist/asprise_scan.jar',
	'dist/asprise_scan-legacy.jar'
  ], 'client');
});