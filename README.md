# angular-stress-test

This program generates an Angular application with a configurable number of
components. The components are nested in a binary tree shape. The program only
generates the actual components, in TypeScript form.

Each component has two fields; one Input and another locally set. As the
components use each other, these fields and bindings are used also.

The components are spread across an configurable number of modules.

Optional, for Bazel users: BAZEL.build files can be generated in a form
compatible with the Bazel build setup in the rules_nodejs example.

## Stress Testing Your Build Tooling

Optionally, the generated components can be made different on each run, by
inserting a meaningless random value. This is useful for stress-testing build
tooling - you can this generator in a loop like so (in Bash):

```
for i in `seq 1 1000`; do angular-stress-test 10 75 -r ; sleep 5 ; done
```

By adjusting the delay (in second) and number of components generated, you can
"stress test" any build tool which is watching the files and re-building. While
such a thing is running, keep an eye on your build tool's CPU and RAM use.

## Installation

```
npm install -g angular-stress-test
```

## Usage

```
cd to-a-typical-angular-app
cd src/app
angular-stress-test 7 42
```

This will generate an application with 7 modules and 42 components spread
across those modules. They will be nested in a "binary tree" shape, with a bit
of indentation to make this clear on the screen.

The output is compatible with Angular CLI; you can use CLI to
generation an application, then populate it using this tool, and it should run
without any further change.

You can also try much larger numbers, to see how well build tooling works with
an Angular program with more numerous modules and components.

## Bazel - Experimental

By default, the generated code is ready to use with Angular CLI, or with other
typical build tooling that has similar requirements.

There is an experimental option "--bazel", which additionally generates
BUILD.bazel files, so that this can also be used the stress test the upcoming
Bazel base to build tooling. This purely generates additional files; the
TypeScript and HTML files are unaffected.

If you don't recognize the word Bazel, don't worry, just ignore this.

## Why?

The purpose of this is to make it possible to "stress test" how well development
(IDE and build tooling) handle applications consisting of highly numerous source
code files and components. It can also be used to stress Angular itself, under
similar conditions.

## Who?

Kyle Cordes    https://kylecordes.com/

Oasis Digital  https://oasisdigital.com/

Copyright 2016-2020

MIT License
