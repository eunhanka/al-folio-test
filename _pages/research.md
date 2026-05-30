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

<div style="margin: 1.5rem 0;">
  {% include figure.liquid path="assets/img/research-map.svg" class="img-fluid" zoomable=false %}
</div>

## Physics-informed AI

I integrate traffic flow theory with deep learning to model network traffic and
estimate states at scale, particularly where sensor data is sparse. This
includes a physics-informed machine learning model built on a generalized
bathtub formulation for large urban networks, published in Transportation
Research Part C, and a network macroscopic fundamental diagram-informed graph
learning method for traffic state imputation, published in Transportation
Research Part B. Ongoing work extends physics-informed neural networks with
adaptive domain decomposition for estimation under sparse sensing. This
direction is the basis of my dissertation, _Physics-Informed Neural Networks for
Secure Connected and Autonomous Traffic Modeling_.

## Network resilience

I study how disruptions and adversarial manipulation affect network
performance, reliability, and recovery. My work on the resilience of traffic
networks to route guidance attacks, published in Transportmetrica B, examines
the role of driver behavior heterogeneity in shaping network outcomes. Related
work models day-to-day traffic dynamics under route guidance misinformation,
including trust evolution and its effect on network resilience. A book chapter
on misdirected guidance and urban traffic network resilience is in press.

## Transportation cybersecurity

I model and detect attacks on connected and autonomous mobility, with attention
to network-level consequences rather than isolated incidents. This includes a
user-centered study of route guidance attacks published in Transportation
Research Part F, and MIRAGE, a method for detecting fake emergency electronic
brake light attacks in V2X networks through event-gated behavioral analysis, to
appear at USENIX VehicleSec. I also co-authored a review of cybersecurity for
next-generation road transportation in the ACM Journal on Autonomous
Transportation Systems.

## Optimization and human behavior

I use network modeling, traffic assignment, and game-theoretic methods to
analyze strategic routing and network-level flow, together with empirical
studies of driver behavior. This includes an analytical framework for
network-level traffic flow under route guidance attacks that extends the
generalized bathtub model, and a mean field game approach to dynamic routing for
connected and autonomous vehicles under congestion. Earlier work modeled driver
behavior directly, including surrogate safety measures in simulator-based
training and gap acceptance at roundabouts under varying conditions, both
published in the Journal of Advanced Transportation.

## Research Funding

<div class="eh-funding">
  <div class="eh-fund-group">
    <h3 class="eh-fund-label">Awarded / Participated</h3>
    <p class="eh-fund-role">Graduate Research Assistant (PI: Dr. Satish V. Ukkusuri); contributed to proposal preparation and project execution.</p>
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

## Mentoring

I have mentored undergraduate researchers in the Lyles School of Civil and
Construction Engineering. This work contributed to a poster presentation at the
2025 CERIAS Cybersecurity Symposium on route guidance and GPS spoofing attacks.
