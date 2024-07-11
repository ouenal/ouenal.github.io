---
title: LiDAR Meta Depth Completion
collection: publications
venue: International Conference on Intelligent Robots and Systems
abbr: IROS
year: 2023
authors: Wolfgang Boettcher, Lukas Hoyer, <b>Ozan Unal</b>, Ke Li, Dengxin Dai
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
            <h1 class="title is-3 publication-title">LiDAR Meta Depth Completion</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Wolfgang Boettcher<sup>1</sup>, Lukas Hoyer<sup>1</sup>, Ozan Unal<sup>1</sup>, Ke Li<sup>1</sup>, Dengxin Dai<sup>2</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>Huawei Technologies <br> IROS 2023 </span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://ieeexplore.ieee.org/abstract/document/10341349" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b> Depth estimation is one of the essential tasks to be addressed when creating mobile autonomous systems. While monocular depth estimation methods have improved in recent times, depth completion provides more accurate and reliable depth maps by additionally using sparse depth information from other sensors such as LiDAR. However, current methods are specifically trained for a single LiDAR sensor. As the scanning pattern differs between sensors, every new sensor would require re-training a specialized depth completion model, which is computationally inefficient and not flexible. Therefore, we propose to dynamically adapt the depth completion model to the used sensor type enabling LiDAR adaptive depth completion. Specifically, we propose a meta depth completion network that uses data patterns derived from the data to learn a task network to alter weights of the main depth completion network to solve a given depth completion task effectively. The method demonstrates a strong capability to work on multiple LiDAR scanning patterns and can also generalize to scanning patterns that are unseen during training. While using a single model, our method yields significantly better results than a non-adaptive baseline trained on different LiDAR patterns. It outperforms LiDAR-specific expert models for very sparse cases. These advantages allow flexible deployment of a single depth completion model on different sensors, which could also prove valuable to process the input of nascent LiDAR technology with adaptive instead of fixed scanning patterns.