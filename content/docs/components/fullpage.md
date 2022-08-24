---
title: "Fullpage"
description: "One page scroll sections"
lead: "Create fullscreen scrolling websites, pages or components. Designed for touch. Totally responsive."
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

Navigate fullpage slides by swiping horizzontalyy on touch devices or trackpad. In alternative, click on the left/right arrows to move forward or go back.

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.fullpage.min.css">

  <div data-fullpage>
    <div data-slides>
      <section id="slide-1" data-slide="1">
        <div data-slide-content>
          Slide 1
        </div>
        <nav data-slide-nav="arrows">
          <span data-slide-arrow="prev">Prev</span>
          <a data-slide-arrow="next" href="#slide-2" title="Next">Next</a>
        </nav>
      </section>
      <section id="slide-2" data-slide="2">
        <div data-slide-content>
          Slide 2
        </div>
        <nav data-slide-nav="arrows">
          <a data-slide-arrow="prev" href="#slide-1" title="Prev">Prev</a>
          <a data-slide-arrow="next" href="#slide-3" title="Next">Next</a>
        </nav>
      </section>
      <section id="slide-3" data-slide="3">
        <div data-slide-content>
          Slide 3
        </div>
        <nav data-slide-nav="arrows">
          <a data-slide-arrow="prev" href="#slide-2" title="Prev">Prev</a>
          <a data-slide-arrow="next" href="#slide-4" title="Next">Next</a>
        </nav>
      </section>
      <section id="slide-4" data-slide="4">
        <div data-slide-content>
          Slide 4
        </div>
        <nav data-slide-nav="arrows">
          <a data-slide-arrow="prev" href="#slide-3" title="Prev">Prev</a>
          <span data-slide-arrow="next">Next</span>
        </nav>
      </section>
    </div>
  </div>
</div>

## Usage
The fullpage component consists in a list of slides which occupy the entire viewport. From a gallery sliders to editorial news, the range of usage is various. It's completely responsive and customizable.



## Customization
Customizing the fullpage slider is pretty simple and straightforward. You can do it with few changes to Sass variables (functionality) and CSS Custom Properties (layout).

### Set direction
You can set the slider direction by changing `$verticalScroll` Sass variable. Setting it to `true` changes the entire slider layout suiting it for vertical scrolling. 

It's set `false` by default.

### Enable navigation
You can enable/disable the navigation arrows by changing the `$slideNavigation` Sass variable. 

It's set `true` by default.

### Change background
Each slide has a default background color set by `--slide-background` variable.

```css
[data-fullpage] {
  --slide-background: #cbd5e1;
}
```

You can change the background color or switch to a background image simply overriding this variable for a selected slide as following:

```css
  [data-slide]:nth-child(1) {
    --slide-background: #6ee7b7;
  }
```

## Variables

This is the list of variables related to this component. You can customize the design by changing or overriding these values:

```css
  --slide-background: #cbd5e1;
  --slide-content-padding: calc(var(--slide-padding) * 2);
  --slide-size: 100%;
  --slide-padding: 2rem;
  --slide-arrow-color: #000;
  --slide-arrow-size: .675rem;
```
