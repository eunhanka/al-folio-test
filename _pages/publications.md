---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed journal articles, conference proceedings, book chapters, and technical reports. Manuscripts under review are listed first.
nav: true
nav_order: 3
---

<div class="publications">

<h2 class="bibliography-section-heading">Under Review</h2>
{% bibliography --query @article[status=underreview] %}

<h2 class="bibliography-section-heading">Journal Articles</h2>
{% bibliography --query @article[status!=underreview] %}

<h2 class="bibliography-section-heading">Conference Proceedings</h2>
{% bibliography --query @inproceedings %}

<h2 class="bibliography-section-heading">Books and Technical Reports</h2>
{% bibliography --query @incollection,@techreport %}

</div>
