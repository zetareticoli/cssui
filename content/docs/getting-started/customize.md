---
title: "Customize"
description: "Learn how to customize CSSUI the way you want"
lead: "Learn how to customize CSSUI the way you want"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 130
toc: true
---

## Overview

CSSUI fornisce un file CSS con tutte le variabili globali utilizzate dai componenti inclusi nella libreria.
È facile riconoscere queste variabili perché hanno tutte il prefix `--cssui-`. 

Per personalizzare il layout dei componenti è quindi sufficiente sovrascrivere i valori associati a queste variabili nel proprio file CSS dedicato.

Ad esempio il colore `gray-darkest` presente nella libreria

```css
/* cssui.css */

--cssui-gray-darkest: #1f2937;

```

Può essere modificato utilizzando un nuovo valore:

```css
/* your-stylesheet.css */

--cssui-gray-darkest: #666;

```

Oppure utilizzando una variabile personalizzata:

```css
/* your-stylesheet.css */

--cssui-gray-darkest: var(--your-new-gray);
```

## Cascade

CSSUI si basa sulle CSS Custom Properties pertanto è importante rispettare il giusto ordine nella cascata CSS per poter sovrascrivere correttamente gli stili.
Qualunque sia la struttura del tuo progetto, l'override degli stili di CSSUI deve venire **dopo** di essi in ordine di caricamento.


## Components

Ogni componente di CSSUI ha le sue variabili locali. Alcune di esse puntano alle variabili globali. Altre invece hanno un proprio valore diretto.
In questo modo è possibile personalizzare il layout di uno specifico componente senza modificare per forza tutti gli altri.

Una variabile con valore diretto:

```css
  --modal-background: rgb(255, 255, 255);
```

Una variabile local che punta ad una globale:

```css
  --drodpwon-link-color: var(--cssui-gray-darkest);
```

Puoi modificare direttamente queste variabili nel modo che preferisci:

```css
  /* Direct value*/
  --drodpwon-link-color: red;
  --drodpwon-link-color: #f60;

  /* Sass variable*/
  --dropdown-link-color: $sass-variable;

  /* CSS variable*/
  --dropdown-link-color: var(--your-css-variable);
```


## Tailwind
 
CSSUI è stato progettato anche per essere facilmente integrabile con le variabili di Tailwind.

È infatti sufficiente sovrascrivere le variabili globali o locali di CSSUI con quelle del framework

```css
  --dropdown-link-color: var(--your-css-variable);
```