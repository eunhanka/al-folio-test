---
layout: about
title: about
permalink: /
nav: true
nav_order: 1
---

<style>
/* The custom hero (eh_hero.liquid) already renders the photo, name, and bio,
   so suppress al-folio's built-in profile block and the duplicate page title.
   Width and centering are handled globally via site.max_width, so no per-page
   container override is needed: the hero fills the centered main column and its
   left edge lines up with the navbar and footer. */
.profile { display: none !important; }
.post .post-header, .post-title, header.post-header { display: none !important; }
</style>

{% include eh_hero.liquid %}
