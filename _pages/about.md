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

/* Home page only: widen the main content column and keep it centered.
   al-folio centers `.container` via `margin-inline: auto` and caps it at
   site.max_width (930px). We raise the cap to 1080px and re-assert auto side
   margins, so the column always stays centered and is never pushed to one side. */
.container.mt-5 { max-width: 1080px; margin-left: auto; margin-right: auto; }

/* Center the hero inside that column. The `.post` prefix raises specificity
   above eh_hero.liquid's `#eh-hero { margin: 0 0 1.5rem }`, which loads after
   this block and would otherwise reset the left/right margins back to 0. */
.post #eh-hero { max-width: 1080px; margin-left: auto; margin-right: auto; }
</style>

{% include eh_hero.liquid %}
