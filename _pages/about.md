---
layout: about
title: about
permalink: /
nav: true
nav_order: 1
---

<style>
/* Hide al-folio's default profile block; the hero shows the photo and name */
.profile { display: none !important; }
.post .post-header, .post-title, header.post-header { display: none !important; }
/* The about content sits in a Bootstrap column that leaves room for the (now hidden) profile.
   Make that column span the full width so the hero is not pushed to the right. */
.profile-content { flex: 0 0 100% !important; max-width: 100% !important; width: 100% !important; }
#eh-hero, #eh-news { max-width: 1100px; margin-left: auto; margin-right: auto; }
</style>

{% include eh_hero.liquid %}
