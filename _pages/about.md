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
I am currently working as a computer vision and machine learning researcher at Huawei Technologies, Zurich. Before joining Huawei, I receieved my PhD from ETH Zurich under the supervision of Prof. Dr. Luc Van Gool. During my PhD, I explored various topics under data-efficient LiDAR semantic segmentation, including and not limited to weakly-, semi-supervised semantic segmentation, multi-modal, multi-task training and active learning. After joining the TRACE-Zurich project, my focus shifted towards the interaction of 3D vision with natural language, working more specifically on dense 3D visual grounding. Before starting my PhD, I received a BSc and MSc from the Department of Electrical Engineering and Information Technology at ETH Zurich.
</p>

News
======
<b>2024-07</b> &nbsp; 2 papers accepted to ECCV 2024! <br/>
<b>2024-05</b> &nbsp; DiAL receives <i>Best Paper Award - Honorable Mention</i> from IEEE RA-L 2023! <br/>
<b>2023-10</b> &nbsp; ConcreteNet wins the ICCV 2023 <i>Object Localization Challenge</i>! <br/>
<b>2022-03</b> &nbsp; ScribbleKITTI is accepted to CVPR 2022 as an ORAL paper! <br/>
<b>2021-10</b> &nbsp; Our work in MedIA 2021 receives the <i>Runner-up Best Paper Award</i>!

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