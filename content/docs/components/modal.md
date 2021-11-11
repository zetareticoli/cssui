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
  <!-- Modal  -->
  <div id="dialog" data-modal-dialog role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabindex="-1">
    <h3 id="dialog-title">Modal title</h3>
    <p>This is the modal content.</p>
    <a href="#" data-modal-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>
  <!-- Background, click to close -->
  <a href="#" data-modal-overlay></a>
</div>

## Usage

The modal dialog is wrapped in a unique container with both `id` and `data-modal` attributes specified.

```html
<div id="modal" data-modal>

  <!-- Modal  -->
  <div id="dialog" data-modal-dialog role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabindex="-1">
    <h3 id="dialog-title">Modal title</h3>
    <p>This is the modal content.</p>
    <a href="#" data-modal-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>

  <!-- Background, click to close -->
  <a href="#" data-modal-overlay></a>
</div>
```
### Unique ID

Each modal should have a unique `id` as follows:

```html
<div id="modal-one" data-modal>
  ...
</div>
```

### Focus Trap

<video width="700" autoplay loop>
  <source src="/videos/modal-focus-demo.mp4" type="video/mp4">
  Your browser don't support video tag
</video>

As you can see, once the modal is opened, when we keep pressing tab, **each element of the modal is focused** but as you keep pressing tab, the **focus goes out** of the modal and other website elements in the header are focused.

This is the default behaviour for every modal.

> If you need to fix this, you need to **add some javascript code** so the focus will remain in the modal
>
> <small> Try <a href="https://www.npmjs.com/package/focus-trap-js" target="_blank">focus-trap-js</a>. Vanilla JS with size < 0.5kb. No dependencies. </small>



### Page Scroll
As far CSSUI is a Pure CSS library, the modal component **doesn't provide any page scroll lock** feature. You need a dedicate Javascript script for it. 

Try <a href="https://www.npmjs.com/package/body-scroll-lock" target="_blank">body-scroll-lock</a> to enable it.
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
