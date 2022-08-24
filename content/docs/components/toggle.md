---
title: "Toggle"
description: "A toggle button allows the user to change a setting between two states."
lead: "A toggle button allows the user to change a setting between two states."
date: 2022-08-18T13:26:54+01:00
lastmod: 2022-08-18T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "components"
weight: 610
toc: true
---

Commonly used in websites, mobile apps, and other software, it provides the users a way to choose between two different states.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.toggle.min.css">
  
  <input type="checkbox" id="toggle" name="toggle" data-toggle-input checked/>
  <label for="toggle" data-toggle></label>
</div>

## Usage

Add the `data-toggle-input` and `data-toggle` attributes to a standard `<input type="checkbox">` and `<label>` HTML tags respectively.

### Code example

```html
  <input type="checkbox" name="toggle" data-toggle-input checked/>
  <label for="toggle" data-toggle></label>
```

## Customization
The toggle comes with the following customization options:
- background color
- size
- radius
- animation

## Variables

This is the list of variables related to this component. You can customize the design by changing or overriding these values:

```css
   --toggle-width: 60px;
   --toggle-height: calc(var(--toggle-width)/2);
   --toggle-radius: 18px;
   --toggle-background: var(--cssui-gray-light);
   --toggle-padding: 10px;
   --toggle-animation: ease-in-out;
   --toggle-animation-time: .2s;
   --toggle-switch-color: #fff;
```