---
title: "Range"
description: "Drag a handle to select a numeric value."
lead: "Drag a handle to select a numeric value"
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

The **range slider** is horizontal and has a single handle that can be moved with the mouse, finger or by using the arrow keys once in focus.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.range.min.css">

  <input type="range" min="1" max="100" value="50" data-range="rounded" />
  <input type="range" min="1" max="100" value="50" data-range />
</div>

## Usage
The range slider uses the default HTML5 tag:

```html
<input type="range" min="1" max="100" value="50" data-range />
```

It comes with preset attributes `min`,`max` and `value` but you can customize them as you prefer.

## Customization
The range slider comes with two different layouts: default and rounded.

You can switch to the secondo one by adding the `rounded` value to `data-range` attribute (see the example above).

If you want to create your own style, use the variables.

## Variables

List of variables used. Customize the component by changing or overriding these values:

```css
	--range-thumb-color: var(--cssui-primary);
	--range-thumb-height: 25px;
	--range-thumb-width: 25px; 
	--range-track-height: auto;
	--range-track-color: var(--cssui-gray-light);
```
