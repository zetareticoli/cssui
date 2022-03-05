---
title: "Local development"
description: "The repo contains a simple web server allowing developers to test changes locally. It supports hot-reload, meaning that every time a file is changed, the browser will automatically load the latest changes."
lead: "The repo contains a simple web server allowing developers to test changes locally. It supports hot-reload, meaning that every time a file is changed, the browser will automatically load the latest changes."
date: 2022-03-05T14:32:00+01:00
lastmod: 2022-03-05T14:32:00+01:00
draft: false
images: []
menu:
    docs:
        parent: "development"
weight: 100
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

## Start the dev server

You can now start the web server by running:

```bash
npm run start
```

By default, the web server listens on `http://localhost:8080`. Make sure the port is not used by other programs.

The web server allows to navigate the directory tree. You can preview your component clicking on the homonym folder and
then on the related `.html` file. 

**Note:** the web server's root path is the `lib/dev-server` folder. It contains the compiled SCSS file and the HTML files.

## Hot-reload
Every time you change the `.html` or `.scss` file of a component, the browser will reflect the latest changes automatically.

