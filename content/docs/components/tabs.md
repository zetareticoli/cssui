---
title: "Tabs"
description: "A single content area with multiple panels, each associated with a header in a list."
lead: "A single content area with multiple panels, each associated with a header in a list."
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

Click tabs to swap between content that is broken into logical sections. Tabs come with a horizontal navigation and a simple, clean style.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.tabs.min.css">

  <div data-tabs role="tablist" aria-label="Sample tabs">
    <input id="tab1" type="radio" name="tab" data-tab="tab1" role="tab" aria-controls="tab-panel1" checked="checked" />
    <input id="tab2" type="radio" name="tab" data-tab="tab2" role="tab" aria-controls="tab-panel2" />
    <input id="tab3" type="radio" name="tab" data-tab="tab3" role="tab" aria-controls="tab-panel3" />
    <nav>
      <label for="tab1" data-tab-label="tab1">First Tab</label>
      <label for="tab2" data-tab-label="tab2">Second Tab</label>
      <label for="tab3" data-tab-label="tab3">Third Tab</label>
    </nav>
    <section id="tab-panel1" data-tab-panel="tab1" role="tabpanel" aria-labelledby="tab1">
      First Tab Panel
    </section>
    <section id="tab-panel2" data-tab-panel="tab2" role="tabpanel" aria-labelledby="tab2">
      Second Tab Panel
    </section>
    <section id="tab-panel3" data-tab-panel="tab3" role="tabpanel" aria-labelledby="tab3">
      Third Tab Panel
    </section>
  </div>
</div>

## Usage

Tabs only require the following structure:
- a `data-tabs` container for both navigation and panels
- use `<input type="radio"` for each navigation link

```html
<div data-tabs>
    <input checked="checked" id="tab1" type="radio" name="tab" data-tab="tab1" />
    <input id="tab2" type="radio" name="tab" data-tab="tab2" />
    <input id="tab3" type="radio" name="tab" data-tab="tab3" />
    <nav>
      <label for="tab1" data-tab-label="tab1" role="tab">First Tab</label>
      <label for="tab2" data-tab-label="tab2" role="tab">Second Tab</label>
      <label for="tab3" data-tab-label="tab3" role="tab">Third Tab</label>
    </nav>
    <section data-tab-panel="tab1" role="tabpanel" aria-labelledby="tab1">
      First Tab Panel
    </section>
      <section data-tab-panel="tab2" role="tabpanel" aria-labelledby="tab2">
      Second Tab Panel
    </section>
    <section data-tab-panel="tab3" role="tabpanel" aria-labelledby="tab3">
      Third Tab Panel
    </section>
  </div>
```
## Accessibility
You can navigate tabs using keyboard by default. Press TAB it will move the focus on the first tab item. By then, you can move between tabs using the keyboard arrows.

## Variables

This is the list of variables related to this component. You can customize the design by changing or overriding these values:

```css
  --tab-border-color: #f3f4f6;
  --tab-panel-background: #fff;
  --tab-border-bottom-color: #9ca3af;
  --tab-border-bottom-width: 2px;
  --tab-spacing: 1rem .5rem;
  /* 
  --tab-active-shadow: inset 1px 0 0 var(--tab-border-color), inset -1px 1px 0 var(--tab-border-color), 0 1px 0 white; 
  --tab-panel-border-color: var(--tab-border-color);
  --tab-radius: 2px; 
  */
```

Some variables are commented. Remove comments if you want **to customize the tab** style using them.
