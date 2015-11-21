Package.describe({
  name: 'ag2s:unpack-all',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Unpacker, wrapper for unar and lsar',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/galler-alexander/meteor-unpack-all',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'unpack-all': '0.0.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('unpack-all.js', 'server');
  api.export('unpackAll');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ag2s:unpack-all');
  api.addFiles('unpack-all-tests.js', 'server');
});
