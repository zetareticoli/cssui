---
title: "Tooltip"
description: "Display informative text hovering and focusing on an element"
lead: "Display informative text hovering and focusing on an element"
date: 2021-07-14T13:26:54+01:00
lastmod: 2021-07-14T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "components"
weight: 610
toc: true
---

Hover or focus over the links below to see tooltips:

<div class="preview text-center">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.tooltip.min.css">

  <a href="#" data-tooltip alt="Alt text" title="This is a link" role="tooltip" aria-label="Tooltip message">Hover me</a>
</div>

## Usage

When activated, tooltips display a text label identifying an element, such as a description of its function.

```html
<a href="#" data-tooltip alt="Alt text" title="This is a link" role="tooltip" aria-label="Tooltip message">Hover me</a>
```

## Variables

List of variables used. Customize the component's design by changing or overriding these values:

```css
  --tooltip-background: var(--cssui-gray-darkest);
  --tooltip-padding: 4px 6px;
  --tooltip-text-color: var(--cssui-gray-light);
  --tooltip-fontsize: .75rem;
  /* --tooltip-radius: 0px */

```
