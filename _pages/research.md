---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 2
---

My research develops physics-informed and data-driven methods to model,
estimate, and secure traffic dynamics across large-scale transportation
networks. The four directions below share a common foundation in network
traffic dynamics and a common methodological core in physics-informed learning,
optimization, game theory, and behavioral modeling.

{% include eh_research_map.liquid %}

<div class="eh-areas">
  {%- for p in site.data.research.pillars -%}
    <section class="eh-area" aria-label="{{ p.name }}">
      <div class="eh-area-head">
        <i class="{{ p.icon }} eh-area-icon" aria-hidden="true"></i>
        <h2 class="eh-area-name">{{ p.name }}</h2>
      </div>
      <p class="eh-area-blurb">{{ p.blurb }}</p>
      <div class="eh-area-papers">
        {%- for key in p.papers -%}
          {% bibliography --query @*[key={{ key }}] %}
        {%- endfor -%}
      </div>
    </section>
  {%- endfor -%}
</div>

<style>
  .eh-areas {
    margin: 2rem 0 0;
  }
  .eh-areas .eh-area {
    margin: 0 0 2.4rem;
  }
  .eh-areas .eh-area-head {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 0 0 0.4rem;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid var(--global-theme-color);
  }
  .eh-areas .eh-area-icon {
    font-size: 1.3rem;
    color: var(--global-theme-color);
    flex-shrink: 0;
  }
  .eh-areas .eh-area-name {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
    color: var(--global-text-color);
  }
  .eh-areas .eh-area-blurb {
    color: var(--global-text-color-light);
    margin: 0 0 0.8rem;
  }
  /* The per-paper {% raw %}{% bibliography %}{% endraw %} blocks reuse the
     publications bib.liquid styling; tighten the spacing between the stacked
     single-entry lists so a pillar reads as one list. */
  .eh-areas .eh-area-papers ol.bibliography {
    margin-bottom: 0;
  }
  .eh-areas .eh-area-papers ol.bibliography li {
    margin-bottom: 1rem;
  }
</style>

## Research Funding

<div class="eh-funding">
  <div class="eh-fund-group">
    <h3 class="eh-fund-label">Awarded / Participated</h3>
    <p class="eh-fund-role">Led full proposal development as Graduate Research Assistant (PI: Dr. Satish V. Ukkusuri), from conceptualization and writing through submission, and contributed to project execution.</p>
    <ul class="eh-fund-list">
      <li class="eh-fund-item">
        <span class="eh-fund-title">Attracting and Retaining the Transportation Workforce and At-Risk Targeted Areas</span>
        <span class="eh-fund-meta">INDOT &middot; $225,000 &middot; 2024&ndash;2026</span>
      </li>
      <li class="eh-fund-item">
        <span class="eh-fund-title">A Multi-Resolution Simulation Platform for Transportation System Security Testing and Evaluation</span>
        <span class="eh-fund-meta">USDOT University Transportation Center (TraCR) &middot; $340,000 &middot; 2024</span>
      </li>
      <li class="eh-fund-item">
        <span class="eh-fund-title">Training Gap Analysis for INDOT Workforce</span>
        <span class="eh-fund-meta">INDOT &middot; $213,500 &middot; 2023&ndash;2025</span>
      </li>
    </ul>
  </div>

  <div class="eh-fund-group">
    <h3 class="eh-fund-label">Submitted / In Preparation</h3>
    <ul class="eh-fund-list">
      <li class="eh-fund-item">
        <span class="eh-fund-title">Resilience-Based Prioritization Framework for Cooperative UAV&ndash;UGV Road Maintenance</span>
        <span class="eh-fund-meta">INDOT &middot; $200,000 &middot; Co-PI &middot; <em>proposal, under review</em></span>
      </li>
    </ul>
  </div>

  <div class="eh-fund-group">
    <h3 class="eh-fund-label">Research Support</h3>
    <ul class="eh-fund-list">
      <li class="eh-fund-item">
        <span class="eh-fund-title">Google Cloud Research Credits</span>
        <span class="eh-fund-meta">Google Cloud (computing grant) &middot; 2025</span>
      </li>
    </ul>
  </div>
</div>

<style>
  .eh-funding { margin: 0.5rem 0 0; }
  .eh-funding .eh-fund-group { margin: 0 0 1.6rem; }
  .eh-funding .eh-fund-group:last-child { margin-bottom: 0; }
  .eh-funding .eh-fund-label {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--global-text-color);
    margin: 0 0 0.5rem;
    padding-bottom: 0.25rem;
    border-bottom: 2px solid var(--global-theme-color);
    display: inline-block;
  }
  .eh-funding .eh-fund-role {
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin: 0 0 0.7rem;
  }
  .eh-funding .eh-fund-list { list-style: none; padding: 0; margin: 0; }
  .eh-funding .eh-fund-item {
    padding: 0 0 0 0.9rem;
    border-left: 2px solid var(--global-divider-color);
    margin: 0 0 0.8rem;
  }
  .eh-funding .eh-fund-item:last-child { margin-bottom: 0; }
  .eh-funding .eh-fund-title {
    display: block;
    color: var(--global-text-color);
    line-height: 1.45;
  }
  .eh-funding .eh-fund-meta {
    display: block;
    font-size: 0.9rem;
    color: var(--global-text-color-light);
    margin-top: 0.15rem;
  }
  .eh-funding .eh-fund-meta em {
    font-style: italic;
    color: var(--global-theme-color);
  }
</style>
