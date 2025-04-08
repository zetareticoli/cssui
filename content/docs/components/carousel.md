---
title: "Carousel"
description: "Allows users to browse through a set of images or content slides, typically with navigation controls like arrows or dots."
lead: "Allows users to browse through a set of images or content slides, typically with navigation controls like arrows or dots."
date: 2025-03-18T09:00:00+01:00
lastmod: 2025-03-18T09:00:00+01:00
draft: false
images: []
menu:
  docs:
    parent: "components"
weight: 610
toc: true
---

{Description here}

<div class="preview">
  <link rel="stylesheet" href="/cssui/cssui.min.css">
  <link rel="stylesheet" href="/cssui/cssui.accordion.min.css">

  <section data-accordion>
    <div data-accordion-item>
      <input type="checkbox" id="panel-1">
      <label for="panel-1">
        Item 1 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </label>
      <div data-accordion-panel>
        Chamber sat word floor turning door feather rapping in the. Angels my hopes this scarce startled just at while and. Till to before liftednevermore betook tis but. Me till door from tapping discourse dreary the. Soul youhere a the nevernevermore i lore. Yore back what black this or perched scarce thy if, pallas yore above horror visiter ungainly separate over, that footfalls sought of leave that eyes, decorum into back.
      </div>
    </div>
    <div data-accordion-item>
      <input type="checkbox" id="panel-2">
      <label for="panel-2" data-accordion-label>
        Item 2
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </label>
      <div data-accordion-panel>
        Chamber sat word floor turning door feather rapping in the. Angels my hopes this scarce startled just at while and. Till to before liftednevermore betook tis but. Me till door from tapping discourse dreary the. Soul youhere a the nevernevermore i lore. Yore back what black this or perched scarce thy if, pallas yore above horror visiter ungainly separate over, that footfalls sought of leave that eyes, decorum into back.
      </div>
    </div>
    <div data-accordion-item>
      <input type="checkbox" id="panel-3">
      <label for="panel-3" data-accordion-label>
        Item 3
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </label>
      <div data-accordion-panel>
        Chamber sat word floor turning door feather rapping in the. Angels my hopes this scarce startled just at while and. Till to before liftednevermore betook tis but. Me till door from tapping discourse dreary the. Soul youhere a the nevernevermore i lore. Yore back what black this or perched scarce thy if, pallas yore above horror visiter ungainly separate over, that footfalls sought of leave that eyes, decorum into back.
      </div>
    </div>
    <div data-accordion-item>
      <input type="checkbox" id="panel-4">
      <label for="panel-4" data-accordion-label>
        Item 4
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </label>
      <div data-accordion-panel>
        Chamber sat word floor turning door feather rapping in the. Angels my hopes this scarce startled just at while and. Till to before liftednevermore betook tis but. Me till door from tapping discourse dreary the. Soul youhere a the nevernevermore i lore. Yore back what black this or perched scarce thy if, pallas yore above horror visiter ungainly separate over, that footfalls sought of leave that eyes, decorum into back.
      </div>
    </div>
  </section>

</div>

## Usage

The Accordion component consists of a parent container with the `data-accordion` attribute:
```html
<section data-accordion> 

  <!-- Put items here -->

</section>
```

Each item is composed by a title and content part:

```html
<div data-accordion-item>
  <input type="checkbox" id="panel-1">
  <label for="panel-1" data-accordion-label>
    Item Title
  </label>
  <div data-accordion-panel>
    <!-- Panel Content here -->
  </div>
</div>
```

## Variables

This is the list of variables related to this component. You can customize the design by changing or overriding these values:

```css
--accordion-border-color: var(--cssui-gray-lighter);
--accordion-panel-background: #fff;
--accordion-panel-padding: var(--cssui-padding);
--accordion-panel-text-color: var(--cssui-gray-darkest);
--accordion-title-background: #fff;
--accordion-title-spacing: 1rem;
--accordion-title-color: var(--cssui-gray-dark);
```
