---
title: Discwise Active Learning for LiDAR Semantic Segmentation
collection: publications
venue: IEEE Robotics and Automation Letters
award: Best Paper Award - Honorable Mention
year: 2023
authors: <b>Ozan Unal</b>, Dengxin Dai, Ali Tamer Unal, Luc Van Gool
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
            <h1 class="title is-3 publication-title">Discwise Active Learning for LiDAR Semantic Segmentation</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Ozan Unal<sup>1</sup>,  Dengxin Dai<sup>2</sup>, Ali Tamer Unal<sup>3</sup>, Luc Van Gool<sup>1,4,5</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>Huawei Technologies, <sup>3</sup>Bogazici University, <sup>4</sup>KU Leuven, <sup>5</sup>INSAIT <br> IEEE Robotics and Automation Letters 2023 <br> Best Paper Award - Honorable Mention</span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://ieeexplore.ieee.org/abstract/document/10266679" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b> While LiDAR data acquisition is easy, labeling for semantic segmentation remains highly time consuming and must therefore be done selectively. Active learning (AL) provides a solution that can iteratively and intelligently label a dataset while retaining high performance and a low budget. In this work we explore AL for LiDAR semantic segmentation. As a human expert is a component of the pipeline, a practical framework must consider common labeling techniques such as sequential labeling that drastically improve annotation times. We therefore propose a discwise approach (DiAL), where in each iteration, we query the region a single frame covers on global coordinates, labeling all frames simultaneously. We then tackle the two major challenges that emerge with discwise AL. Firstly we devise a new acquisition function that takes 3D point density changes into consideration which arise due to location changes or ego-vehicle motion. Next we solve a mixed-integer linear program that provides a general solution to the selection of multiple frames while taking into consideration the possibilities of disc intersections. Finally we propose a semi-supervised learning approach to utilize all frames within our dataset and improve performance.