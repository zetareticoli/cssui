---
title: "Introduction"
description: "CSSUI is a library of interactive user interface components realized in pure HTML and CSS"
lead: "CSSUI is a library of interactive user interface components realized in pure HTML and CSS"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 100
toc: true
---

## Installation

Use [npm](https://www.npmjs.com/package/css-ui-lib) to install CSSUI in your project:

```bash
npm i css-ui-lib
```

Or <a href="/cssui.zip">Download it here</a>.

## Usage

The library includes a global stylesheet and components list divide by folder.

Each component folder includes two files:

1. a HTML template file
2. a CSS stylesheet.

You can use template files as partial or copy/paste the code into the project's files according to your needs.

### Stylesheets Cascade

```html

<!-- CSSUI Global Stylesheet -->
<link rel="stylesheet" href="/vendor/cssui.css">

<!-- CSSUI Components -->
<link rel="stylesheet" href="/vendor/cssui/accordion.css">
<link rel="stylesheet" href="/vendor/cssui/tabs.css">

<!-- Project Files -->
<link rel="stylesheet" href="your-variables.css">
<link rel="stylesheet" href="your-style.css">
```
### Files Included
<table> 
	<thead> 
		<tr> 
			<th>File Name</th> 
			<th>Notes</th> 
			<th class="text-center no-wrap">Size</th>
			<th class="text-center no-wrap">Required</th> 
		</tr> 
	</thead> 
	<tbody> 
    <tr> 
    	<td class="fs-6"><code><span>cssui.css</span></code></td> 
    	<td class="fs-6">
    		This file has the CSS variables used by all components.
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 text-success no-wrap">✔ Required</td>
    </tr>
    <tr> 
    	<td class="fs-6">
        <code><span>accordion/accordion.html</span></code>
        <code><span>accordion/accordion.css</span></code>
      </td> 
    	<td class="fs-6">
    		Accordion component.
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 no-wrap">Optional</td>
    </tr>
        <tr> 
    	<td>
        <code><span>dropdown/dropdown.html</span></code>
        <code><span>dropdown/dropdown.css</span></code>
      </td> 
    	<td class="fs-6">
    		Dropdown component.
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 no-wrap">Optional</td>
    </tr>
    <tr> 
    	<td class="fs-6">
        <code><span>modal/modal.html</span></code>
        <code><span>modal/modal.css</span></code>
      </td> 
    	<td class="fs-6">
    		Modal component
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 no-wrap">Optional</td>
    </tr>
    <tr> 
    	<td class="fs-6">
        <code><span>slideout/slideout.html</span></code>
        <code><span>slideout/slideout.css</span></code>
      </td> 
    	<td class="fs-6">
    		Slideout component
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 no-wrap">Optional</td>
    </tr>
    <tr> 
    	<td class="fs-6">
        <code><span>tabs/tabs.html</span></code>
        <code><span>tabs/tabs.css</span></code>
      </td> 
    	<td class="fs-6">
    		Tabs component
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 no-wrap">Optional</td>
    </tr>
    <tr> 
    	<td class="fs-6">
        <code><span>tooltip/tooltip.html</span></code>
        <code><span>tooltip/tooltip.css</span></code>
      </td> 
    	<td class="fs-6">
    		Tooltip component
    	</td>
    	<td class="text-center fs-6">14kb</td> 
    	<td class="text-center fs-6 text-success no-wrap">Optional</td>
    </tr>
  </tbody> 
</table>

## Support

[Open an issue ](https://github.com/zetareticoli/cssui/issues) here on Github to share feedback, report bug or ask help.
