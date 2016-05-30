# angular2-stress-test

This program generates an Angular 2 application with an arbitrary number of components. The components are nested in a binary tree shape. The program only generates the actual components, and typescript form; use whatever mechanism you prefer (such as angular-cli) for the build mechanism.

## Installation

```
npm install -f angular2-stress-test
```

## Usage

```
cd directory-with-your-components-in-it
angular2-stress-test 42
```

This will generate an application with one application component and 42 additional components. They will be nested in a "binary tree" shape, with a bit of indentation to make this clear on the screen.

The components are extremely simple. They have no functionality at all, and just a simple template that nests other components.

## Why?

The purpose of this is to make it possible to "stress test" how well your favorite build tooling will fare using applications consisting of numerous source code files and components. It can also be used to stress Angular 2 itself, under similar conditions.

## Who?

Kyle Cordes    http://kylecordes.com/

Oasis Digital  http://oasisdigital.com/

Copyright 2016

MIT License

