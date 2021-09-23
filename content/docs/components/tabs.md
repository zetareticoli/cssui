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

Click tabs to swap between content that is broken into logical sections.

<div class="preview">
  <link rel="stylesheet" href="/cssui.css">
  <link rel="stylesheet" href="/tabs/tabs.css">

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
      <section data-tab-panel="tab2" role="tabpanel" aria-labelledby="tab1">
      Second Tab Panel
    </section>
    <section data-tab-panel="tab3" role="tabpanel" aria-labelledby="tab1">
      Third Tab Panel
    </section>
  </div>
</div>

## Variables

List of variables used. Customize the component's design by changing or overriding these values:

```css
  --tab-border-color: #F3F4F6;
  --tab-panel-background: #fff;
  --tab-border-bottom-color: #9CA3AF;
  --tab-border-bottom-width: 2px;
  --tab-spacing: 1rem .5rem;
```

Some variables are commented. Remove the comment if you want to change the style of tabs.

