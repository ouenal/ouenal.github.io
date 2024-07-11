---
title: Understanding Birds-Eye View of Road Semantics using an Onboard Camera
collection: publications
venue: IEEE Robotics and Automation Letters
year: 2022
authors: Yigit Baran Can, Alexander Liniger, <b>Ozan Unal</b>, Danda Pani Paudel, Luc Van Gool
author_profile: true
---
<head>
  <link rel="stylesheet" href="/assets/css/bulma.min.css">
  <link rel="stylesheet" href="/assets/css/bulma-carousel.min.css">
  <link rel="stylesheet" href="/assets/css/bulma-slider.min.css">
  <link rel="stylesheet" href="/assets/css/fontawesome.all.min.css">
  <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
  <link rel="stylesheet" href="/assets/css/index.css">
</head>
<div class="hero-body">
    <div class="container is-max-desktop">
        <div class="columns is-centered">
        <div class="column has-text-centered">
            <h1 class="title is-3 publication-title">Understanding Birds-Eye View of Road Semantics using an Onboard Camera</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Yigit Baran Can, Alexander Liniger, Ozan Unal, Danda Pani Paudel, Luc Van Gool<sup>1,2</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>KU Leuven <br> IEEE Robotics and Automation Letters 2022</span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://ieeexplore.ieee.org/abstract/document/9697426" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b> Autonomous navigation requires scene understanding of the action-space to move or anticipate events. For planner agents moving on the ground plane, such as autonomous vehicles, this translates to scene understanding in the bird's-eye view (BEV). However, the onboard cameras of autonomous cars are customarily mounted horizontally for a better view of the surrounding. In this work, we study scene understanding in the form of online estimation of semantic BEV maps using the video input from a single onboard camera. We study three key aspects of this task, image-level understanding, BEV level understanding, and the aggregation of temporal information. Based on these three pillars we propose a novel architecture that combines these three aspects. In our extensive experiments, we demonstrate that the considered aspects are complementary to each other for BEV understanding. Furthermore, the proposed architecture significantly surpasses the current state-of-the-art. The source code of our method is available at <a href="https://github.com/ybarancan/BEV_feat_stitch">here</a>.