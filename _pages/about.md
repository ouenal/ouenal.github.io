---
permalink: /
title: "Introduction"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
show_thumbnail: true
---

<p style='text-align: justify;'>
I am currently employed as a Computer Vision and Machine Learning
Research Scientist in the Computer Vision Lab at Huawei Technologies, Zurich. I
work on developing memory- and computationally-efficient image
restoration models for the next-generation smartphones and cloud
services. <br/>

Prior to joining Huawei, I received a PhD from ETH Zurich under
the supervision of Prof. Dr. Luc Van Gool, where I explored data-efficient
LiDAR semantic segmentation. My research spanned various approaches,
including but not limited to weakly-supervised, semi-supervised
training and active learning. In the later stages of my PhD, I contributed 
to the TRACE-Zurich project, shifting my focus towards integrating 
3D vision with natural language, particularly in dense 3D visual grounding.
</p>

News
======
<b>2024-09</b> &nbsp; My student's work S4A is accepted to NeurIPS 2024 as Spotlight! <br/>
<b>2024-05</b> &nbsp; DiAL receives <i>Best Paper Award - Honorable Mention</i> from IEEE RA-L 2023! <br/>
<b>2023-10</b> &nbsp; ConcreteNet wins the ICCV 2023 <i>Object Localization Challenge</i>! <br/>
<b>2022-03</b> &nbsp; ScribbleKITTI is accepted to CVPR 2022 as an ORAL paper! <br/>
<b>2021-10</b> &nbsp; Our follow-up work in MedIA 2021 receives the <i>Runner-up Best Paper Award</i>! <br/>
<b>2019-10</b> &nbsp; Our paper in MICCAI 2019 is accepted as an ORAL!

Selected Publications
======

{% assign post = site.publications[6] %}
  {% include archive-single.html %}

{% assign post = site.publications[7] %}
  {% assign post.header.teaser = "images/dial/thumbnail.png" %}
  {% include archive-single.html %}

{% assign post = site.publications[10] %}
  {% assign post.header.teaser = "images/concretenet/thumbnail.png" %}
  {% include archive-single.html %}

{% assign post = site.publications[11] %}
  {% assign post.header.teaser = "images/bst/thumbnail.png" %}
  {% include archive-single.html %}