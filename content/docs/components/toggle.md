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

Add the `data-toggle-input` and `data-toggle` attributes to a standard `<input type="checkbox">` and `<label>` HTML tags respectively. Done.

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

List of variables used. Customize the component's design by changing or overriding these values:

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