---
title: "Dropdown"
description: "Toggle contextual overlays for displaying lists of links and more"
lead: "Toggle contextual overlays for displaying lists of links and more"
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

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re toggled by clicking, not by hovering.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.dropdown.min.css">

  <details data-dropdown>
    <summary>
      Select an option...
    </summary>
    <ul role="menu">
      <li><a href="#">Dropdown item</a></li>
      <li><a href="#">Dropdown item</a></li>
      <li><a href="#">Dropdown item</a></li>
    </ul>
  
  </details>
</div>

## Usage

Dropdown is built using `<details>` HTML5 tag, which creates a disclosure widget where information is visible only into an "open" state. [More info here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details?retiredLocale=it)

```html
<details data-dropdown>
  <summary>
    Select an option...
  </summary>
  <ul role="menu">
    <li><a href="#">Dropdown item</a></li>
    <li><a href="#">Dropdown item</a></li>
    <li><a href="#">Dropdown item</a></li>
  </ul>

</details>
```

## Variables

List of variables used. Customize the component's design by changing or overriding these values:

```css
  --dropdown-border-radius: var(--cssui-radius);
  --dropdown-border-color: var(--cssui-gray-light);
  --dropdown-link-background: var(--cssui-gray-lighter);
  --dropdown-link-color: var(--cssui-gray-darkest);
  --dropdown-panel-background: #fff;
  --dropdown-padding: var(--cssui-padding);
```
