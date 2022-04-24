---
title: "Sass/SCSS support, local server and automation"
description: "What new features are we working on this year"
lead: "More features for local development"
date: 2022-04-23T09:00:00+01:00
draft: false
weight: 90
contributors: ["Francesco Improta"]
---

With the [PR #44](https://github.com/zetareticoli/cssui/pull/44) we have added some features for local development tasks.

CSS files are renamed to SCSS. The content of the files has not been touched. The content of HTML files must be nested into <body> to make working the hot-reload feature of the web-server.

It is now possible to:

- **start a dev server** with hot-reload for local development
- **build the library**, including automatic browser-vendors prefixing and minification.

This will make it easier to release a new version of the library. 

[Check the docs](https://www.cssui.dev/docs/development/local-development) for more information.

The components `.md` files have been updated to use the compiled version of the library. They cannot use the source files anymore since they are SCSS. 

As of now, the build files of the library have to be manually copied to the assets/cssui folder. A new PR will be created which will include this improvement.

[Follow us on Twitter](https://twitter.com/css_ui) or on [Star on Github](https://github.com/zetareticoli/cssui) to stay updated! 

Thank you 🙏

*CSSUI Team*