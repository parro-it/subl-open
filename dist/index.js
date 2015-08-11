#!/usr/bin/env node
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _simpleAuth = require('simple-auth');

var _simpleAuth2 = _interopRequireDefault(_simpleAuth);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _child_process = require('child_process');

var _fs = require('fs');

var argv = _yargs2['default'].argv;
if (!argv.user || !argv.pwd) {
  process.stderr.write('Usage: subl-open --user=you --pwd=yourpassword');
  process.exit(1); // eslint-disable-line no-process-exit
}
var auth = (0, _simpleAuth2['default'])(argv.user, argv.pwd);

_http2['default'].createServer(function (req, res) {
  auth(req, res, function () {
    var file = req.url.split(':')[0];
    (0, _fs.exists)(file, function (itExists) {
      if (itExists) {
        (0, _child_process.spawn)('subl', [req.url], { detached: true });
      }
    });

    res.writeHead(204, { 'Content-Type': 'text/plain' });
    res.end();
  });
}).listen(31337, '127.0.0.1');

process.stdout.write('Server running at http://127.0.0.1:31337/\n');