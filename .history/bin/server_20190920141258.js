#!/usr/bin/env node
'use strict';

try {
var v = process.version.replace('v', '').split('.');
var major = parseInt(v[0], 10);
var minor = parseInt(v[1], 10);
if (major < 8 || (major === 8 && minor < 9)) {
console.error('\nYour current version of Node is ' + process.version + ' but Stencil needs v8.9 at least. It\'s recommended to install latest Node (https://github.com/nodejs/Release).\n');
exit(1);
}
if (major < 10 || (major === 10 && minor < 13)) {
console.log('\nYour current version of Node is ' + process.version + ', however the recommendation is a minimum of Node LTS (https://github.com/nodejs/Release). Note that future versions of Stencil will eventually remove support for non-LTS Node versions.\n');
}
} catch (e) {}

var cli = require('../dist/cli');
var node = require('../sys/node');
var sys = new node.NodeSystem();
var logger = new node.NodeLogger();

cli.run(process, sys, logger);