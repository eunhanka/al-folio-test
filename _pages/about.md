---
layout: about
title: about
permalink: /
nav: true
nav_order: 1
---

<style>
/* Hide al-folio's default about header (title + subtitle) since the hero shows them */
.profile { display: none !important; }
.post .post-header, .post-title, header.post-header { display: none !important; }
/* Let the hero use the full content width */
.profile-content, .post .post-content { width: 100% !important; max-width: 960px !important; margin-left: auto !important; margin-right: auto !important; }
</style>

{% include eh_hero.liquid %}
