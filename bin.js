#!/usr/bin/env node

var generate = require('./');

var help = false;
var args = process.argv.slice(2).filter(function(arg) {
  if (arg.match(/^(-+|\/)(h(elp)?|\?)$/)) {
    help = true;
  } else {
    return !!arg;
  }
});

if (help || args.length === 0) {
  var log = help ? console.log : console.error;
  log('Usage: angular2-stress-test N');
  log('');
  log('  Generates an Angular 2 application in the current directory');
  log('  consisting of an application component and N additional');
  log('  components.');
  log('');
  log('Options:');
  log('');
  log('  -h, --help    Display this usage info');
  process.exit(help ? 0 : 1);
} else {
  var n = parseInt(args[0]);
  console.log("Generating application with", n, "components");
  generate(n);
}
