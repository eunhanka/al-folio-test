---
layout: about
title: about
permalink: /
nav: true
nav_order: 1
---

<style>
/* Hide al-folio's default profile header since the hero shows it */
.profile { display: none !important; }
.post .post-header, .post-title, header.post-header { display: none !important; }
/* Make the content area span the full page and center the hero */
.profile-content, .post, .post .post-content, .container.profile-page, .container { width: 100% !important; max-width: 100% !important; }
#eh-hero { max-width: 1000px; margin-left: auto; margin-right: auto; }
#eh-news { max-width: 1000px; margin-left: auto; margin-right: auto; }
</style>

{% include eh_hero.liquid %}
