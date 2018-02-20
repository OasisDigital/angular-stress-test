# angular-stress-test

This program generates an Angular application with an arbitrary number of
components. The components are nested in a binary tree shape. The program only
generates the actual components, in TypeScript form; use whatever mechanism you
prefer (such as angular-cli) for the build mechanism.

Each component has two fields; one Input and another locally set. As the
components use each other, these fields and bindings are used also.

An NgModule is also generated.

## Stress Testing Your Build Tooling

Optionally, the generated components can be made different on each run, by
inserting a meaningless random value. This is useful for stress-testing build
tooling - you can this generator in a loop like so (in Bash):

```
for i in `seq 1 1000`; do angular-stress-test 500 -r ; sleep 5 ; done
```

By adjusting the delay (in second) and number of components generated, you can
"stress test" any build tool (like angular-cli) which is watching the files and
re-building. While such a thing is running, keep an eye on your build tool's
CPU and RAM use.

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

## Why?

The purpose of this is to make it possible to "stress test" how well your
favorite build tooling will fare using applications consisting of highly
numerous source code files and components. It can also be used to stress Angular
itself, under similar conditions.

## Who?

Kyle Cordes    https://kylecordes.com/

Oasis Digital  https://oasisdigital.com/

Copyright 2016-2018

MIT License
