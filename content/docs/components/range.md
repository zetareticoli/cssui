---
title: "Range"
description: "Drag a handle to select a numeric value."
lead: ""
date: 2022-06-06T11:40:00+01:00
lastmod: 2022-06-06T11:40:00+01:00
draft: false
images: []
menu:
  docs:
    parent: "components"
weight: 610
toc: true
---

The basic slider is horizontal and has a single handle that can be moved with the mouse or by using the arrow keys.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.range.min.css">

  <input type="range" min="1" max="100" value="50" data-range />
</div>

## Usage
The fullpage component consists in a list of slides which occupy the entire viewport. From a gallery sliders to editorial news, the range of usage is various. It's completely responsive and customizable.

## Customization
Customizing the fullpage slider is pretty simple and straightforward. You can do it with few changes to Sass variables (functionality) and CSS Custom Properties (layout).

## Variables

List of variables used. Customize the component by changing or overriding these values:

```css
  --slide-background: #cbd5e1;
  --slide-content-padding: calc(var(--slide-padding) * 2);
  --slide-size: 100%;
  --slide-padding: 2rem;
  --slide-arrow-color: #000;
  --slide-arrow-size: .675rem;
```
