---
title: "Modal"
description: "A modal dialog is a dialog that appears on top of the main content and moves the system into a special mode requiring user interaction"
lead: "A modal dialog is a dialog that appears on top of the main content and moves the system into a special mode requiring user interaction"
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

Click on the button below to toggle the modal dialog.

<link rel="stylesheet" href="/cssui.css">
<link rel="stylesheet" href="/modal/modal.css">

<div class="preview" style="text-align: center">
  <a href="#modal" class="btn btn-primary btn-lg px-4 mb-2">Open Modal</a>
</div>

<div id="modal" data-modal>
  <div data-modal-dialog>
    <h3>Modal title</h3>
    <p>This is the modal content.</p>
  </div>
  <a href="#" data-modal-overlay></a>
</div>

## Usage

The modal dialog is wrapped in a unique container with both `id` and `data-modal` attributes specified.

```html
<div id="modal" data-modal>
  <!-- Modal  -->
  <div data-modal-dialog role="dialog" aria-modal="true">
    <h3>Modal title</h3>
    <p>This is the modal content.</p>
    <a href="#" data-modal-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>
  <!-- Background, click to close -->
  <a href="#" data-modal-overlay></a>
</div>
```

### Set ID

Set a unique `id` for each modal you want to use in a page.

Example:

```html
<div id="modal-1" data-modal></div>
```

## Variables

List of variables used. Customize the component's design by changing or overriding these values:

```css
  --modal-background: rgb(255, 255, 255);
  --modal-level: 9999;
  --modal-max-size: 500px;
  --modal-overlay-background: rgba(0, 0, 0, .2);
  --modal-radius: 8px;
  --modal-size: 80%;
  --modal-spacing: 1rem;
```

Some variables are commented. Remove the comment if you want to change the style of tabs.
