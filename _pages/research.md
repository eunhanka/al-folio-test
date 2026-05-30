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
direction is the basis of my dissertation, *Physics-Informed Neural Networks for
Secure Connected and Autonomous Traffic Modeling*.

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

## Mentoring

I have mentored undergraduate researchers in the Lyles School of Civil and
Construction Engineering. This work contributed to a poster presentation at the
2025 CERIAS Cybersecurity Symposium on route guidance and GPS spoofing attacks.
