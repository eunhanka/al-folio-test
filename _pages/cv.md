---
layout: page
permalink: /cv/
title: CV
description: Download the full curriculum vitae as a PDF.
nav: false
nav_order: 5
---

{%- comment -%}
Single source of truth for the CV PDF.
To update the CV: overwrite assets/pdf/CV_Eunhan.pdf with the same
filename and commit — the site picks it up automatically. The ?v=
build-time query busts browser/CDN caches so visitors always get the
latest file even though the name never changes.
{%- endcomment -%}
{%- assign cv_file = '/assets/pdf/CV_Eunhan.pdf' | relative_url -%}
{%- assign cv_ver = site.time | date: '%s' -%}
{%- assign cv_url = cv_file | append: '?v=' | append: cv_ver -%}

<p>
  <a href="{{ cv_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" rel="noopener" download="CV_Eunhan.pdf">
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</p>

<div style="border: 0.5px solid var(--global-divider-color); border-radius: 8px; overflow: hidden; margin-top: 1rem;">
  <iframe
    src="{{ cv_url }}"
    title="Curriculum vitae of Eunhan Ka"
    width="100%"
    height="900"
    style="border: 0; display: block;">
  </iframe>
</div>

<noscript>
  Your browser cannot display the embedded PDF.
  <a href="{{ cv_url }}" download="CV_Eunhan.pdf">Download the CV here</a>.
</noscript>
