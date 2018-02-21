#!/usr/bin/env node

const generate = require('./');

let help = false;
let deterministic = true;
let bazel = false;

const args = process.argv.slice(2).filter(function (arg) {
  if (arg.match(/^(-+|\/)(h(elp)?|\?)$/)) {
    help = true;
  } else if (arg.match(/^(-+|\/)(r(andom)?|\?)$/)) {
    deterministic = false;
  } else if (arg.match(/^(-+|\/)(b(azel)?|\?)$/)) {
    bazel = true;
  } else {
    return !!arg;
  }
});

if (help || args.length < 2) {
  var log = help ? console.log : console.error;
  log(`Usage: angular-stress-test N C

  Generates an Angular application in the current directory
  consisting of:

  * N modules
  * C components, divided across those modules

Options:
  -h, --help    Display this usage info
  -r, --random  Make the components non-identical
  -b, --bazel   Also email Bazel BUILD files (*very* experimental)
`);
  process.exit(help ? 0 : 1);
} else {
  const n = parseInt(args[0]);
  const c = parseInt(args[1]);
  console.log(`Generating ${n} modules, ${c} components, deterministic = ${deterministic}`);
  if (bazel) {
    console.log('Experimentally generating BUILD.bazel files');
  }
  generate.generate(n, c, deterministic, bazel);
}
