---
title: "Slideout"
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
<a href="#slideout" class="btn btn-primary btn-lg px-4 mb-2">Open Slideout</a>
</div>

<div id="slideout" data-slideout-panel>
  <div data-slideout-header>
    <h3>Slideout</h3>
    <a href="#" data-slideout-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>
  <p>Content for the slideout goes here. You can place just about any component or custom elements here.
</p>
</div>

## Usage

You must use a link element to toggle the Slideout component just like `<a href="#slideout" data-slideout-toggle>Open Slideout</a>`. The link should point to the `id` of the Slideout container Use any class do you prefer to style the toggle.

The Slideout panel should have the `data-slideout-panel` attribute. Apart from `data-slideout-header`, you can put any content inside the panel.

{{< highlight html >}}

<a href="#slideout">Open Slideout</a>

<div id="slideout" data-slideout-panel>
  <div data-slideout-header>
    <h3>Slideout</h3>
    <a href="#" data-slideout-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>
  <p>Content for the slideout goes here. You can place just about any component or custom elements here.
</p>
</div>
{{< /highlight >}}

## Live Demo

<link rel="stylesheet" href="/cssui.css">
<link rel="stylesheet" href="/slideout/slideout.css">

<a href="#slideout" data-slideout-toggle>Open Slideout</a>

<div id="slideout" data-slideout-panel>
  <div data-slideout-header>
    <h3>Slideout</h3>
    <a href="#" data-slideout-close>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </a>
  </div>
  <p>Content for the slideout goes here. You can place just about any component or custom elements here.
</p>
</div>