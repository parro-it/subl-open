#!/usr/bin/env node

import http from 'http';
import basicAuth from 'simple-auth';
import yargs from 'yargs';
import { spawn } from 'child_process';
import { exists } from 'fs';

const argv = yargs.argv;
if (!argv.user || !argv.pwd) {
  process.stderr.write('Usage: subl-open --user=you --pwd=yourpassword');
  process.exit(1); // eslint-disable-line no-process-exit
}
const auth = basicAuth(argv.user, argv.pwd);


http.createServer((req, res) => {
  auth(req, res, () => {
    const file = req.url.split(':')[0];
    exists(file, itExists => {
      if (itExists) {
        spawn('subl', [req.url], { detached: true});
      }
    });

    res.writeHead(204, {'Content-Type': 'text/plain'});
    res.end();
  });
}).listen(31337, '127.0.0.1');

process.stdout.write('Server running at http://127.0.0.1:31337/\n');
