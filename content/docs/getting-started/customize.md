---
title: "Customize"
description: "Learn how to customize CSSUI the way you want"
lead: "Learn how to customize CSSUI the way you want"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 130
toc: true
---

## Overview

CSSUI provides a CSS file with all the global variables used by the components included in the library.
It is easy to recognize these variables because they start with the prefix `--cssui-`.

To customize component's layout you can to overwrite those usign your own dedicated CSS file.

For example the `gray-darkest` color in CSSUI is:

```css
/* cssui.css */

--cssui-gray-darkest: #1f2937;

```

It could be customized using a HEX value as follow:

```css
/* your-stylesheet.css */

--cssui-gray-darkest: #666;

```

Or using your custom variable:

```css
/* your-stylesheet.css */

--cssui-gray-darkest: var(--your-new-gray);
```

## Cascade

CSSUI is makes use of CSS Custom Properties. So, it's really important to mind the CSS cascade in order to correctly override the styles.
Whatever the structure of your project, the override files must be placed ** after ** the `cssui.css` file in load order.

## Components

Each CSSUI component has its own local variables. Some of them point to global variables. Others have their own direct value.
In this way it's possible to customize the layout of a specific component without necessarily changing the default.

Look at a varialbe for Modal component, using a `rgb` value:

```css
  --modal-background: rgb(255, 255, 255);
```

This is a variable for Dropdown component, using a variable from CSSUI:

```css
  --drodpwon-link-color: var(--cssui-gray-darkest);
```

You can customize these variables as you prefer:

```css
  /* Direct value*/
  --drodpwon-link-color: red;
  --drodpwon-link-color: #f60;

  /* Sass variable*/
  --dropdown-link-color: $sass-variable;

  /* CSS variable*/
  --dropdown-link-color: var(--your-css-variable);
```

## Tailwind
 
CSSUI has been designed to easily integrate with other frameworks like Tailwind.

_More details coming soon!_
