---
layout: page
permalink: /publications/
title: publications
description: Journal articles, book chapters, and conference proceedings. Items under review are listed separately.
nav: true
nav_order: 3
---

<div class="publications">

<h2 class="bibliography-section-heading">Journal Articles</h2>
{% bibliography --query @article[status!=underreview] %}

<h2 class="bibliography-section-heading">Book Chapters</h2>
{% bibliography --query @incollection %}

<h2 class="bibliography-section-heading">Conference Proceedings</h2>
{% bibliography --query @inproceedings %}

<h2 class="bibliography-section-heading">Under Review</h2>
{% bibliography --query @article[status=underreview] %}

</div>
