---
title: "Build the library"
description: "Building the library is easy as running an NPM task."
lead: "Building the library is easy as running an NPM task."
date: 2022-03-05T14:32:00+01:00
lastmod: 2022-03-05T14:32:00+01:00
draft: false
images: []
menu:
    docs:
        parent: "development"
weight: 101
toc: true
---

## Setup

Navigate to the `lib` folder:

```bash
cd lib
```

and then install NPM packages:

```bash
npm i
```

## Build the library

You can now build the library by running:

```bash
npm run build
```

This will generate the following files in the `lib/dist` folder:
- `cssui.min.css`
- `cssui.min.css.map`
- `cssui.<component>.min.css`
- `cssui.<component>.min.css.map`
- `cssui.bundle.min.css`
- `cssui.bundle.min.css.map`

The `cssui.bundle.min.css` file contains the `cssui.min.css` and all the `cssui.<component>.min.css` files.
It's a convenient file for fast prototyping.

In a production scenario, remember don't use the bundle. Include only the `cssui.min.css` and the
`cssui.<component>.min.css` you need instead.

For each SCSS file, the `build` task performs compilation, browser-vendors prefixing based on
[browserslist](https://github.com/browserslist/browserslist), and minification.

### The `build:release` task
This task is the same as the `build` one, except that it creates an additional `cssui.zip` file which contains the
output of the `build` task. This is a convenient task for releasing a new version of CSSUI where the ZIP file is needed.
