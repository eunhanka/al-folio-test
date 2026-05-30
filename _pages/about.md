---
layout: about
title: about
permalink: /
nav: true
nav_order: 1
---

<style>
/* The custom hero (eh_hero.liquid) already renders the photo, name, and bio,
   so suppress al-folio's built-in profile block and the duplicate page title. */
.profile { display: none !important; }
.post .post-header, .post-title, header.post-header { display: none !important; }

/* The about layout caps its main column at site.max_width (930px), which makes
   the hero feel narrow and off-center. This <style> only loads on the home page,
   so widen just this page's main container and center the hero within it. No
   negative margins are used, so text is never clipped on the left. */
.container.mt-5 { max-width: 1080px; }
#eh-hero { max-width: 1080px; margin-left: auto; margin-right: auto; }
</style>

{% include eh_hero.liquid %}
