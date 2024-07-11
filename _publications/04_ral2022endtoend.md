---
title: End-To-End Optimization of LiDAR Beam Configuration for 3D Object Detection and Localization
collection: publications
venue: IEEE Robotics and Automation Letters
year: 2022
authors: Niclas Vodisch, <b>Ozan Unal</b>, Ke Li, Luc Van Gool, Dengxin Dai
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
            <h1 class="title is-3 publication-title">End-To-End Optimization of LiDAR Beam Configuration for 3D Object Detection and Localization</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Niclas Vodisch<sup>1,2</sup>, Ozan Unal<sup>1</sup>, Ke Li<sup>1</sup>, Luc Van Gool<sup>1,3</sup>, Dengxin Dai<sup>4</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>University of Freiburg, <sup>3</sup>KU Leuven, <sup>4</sup>MPI for Informatics <br> IEEE Robotics and Automation Letters 2022</span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://ieeexplore.ieee.org/abstract/document/9681305/" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b> Existing learning methods for LiDAR-based applications use 3D points scanned under a pre-determined beam configuration, e.g., the elevation angles of beams are often evenly distributed. Those fixed configurations are task-agnostic, so simply using them can lead to sub-optimal performance. In this work, we take a new route to learn to optimize the LiDAR beam configuration for a given application. Specifically, we propose a reinforcement learning-based learning-to-optimize (RL-L2O) framework to automatically optimize the beam configuration in an end-to-end manner for different LiDAR-based applications. The optimization is guided by the final performance of the target task and thus our method can be integrated easily with any LiDAR-based application as a simple drop-in module. The method is especially useful when a low-resolution (low-cost) LiDAR is needed, for instance, for system deployment at a massive scale. We use our method to search for the beam configuration of a low-resolution LiDAR for two important tasks: 3D object detection and localization. Experiments show that the proposed RL-L2O method improves the performance in both tasks significantly compared to the baseline methods. We believe that a combination of our method with the recent advances of programmable LiDARs can start a new research direction for LiDAR-based active perception.