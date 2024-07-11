---
title: 2D Feature Distillation for Weakly- and Semi-Supervised 3D Semantic Segmentation
collection: publications
venue: Winter Conference on Applications of Computer Vision
abbr: WACV
year: 2024
authors: <b>Ozan Unal</b>, Dengxin Dai, Lukas Hoyer, Yigit Baran Can, Luc Van Gool
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
            <h1 class="title is-3 publication-title">2D Feature Distillation for Weakly- and Semi-Supervised 3D Semantic Segmentation</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                   Ozan Unal<sup>1</sup>, Dengxin Dai<sup>2</sup>, Lukas Hoyer<sup>1</sup>, Yigit Baran Can<sup>1</sup>, Luc Van Gool<sup>1,3,4</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>Huawei Technologies, <sup>3</sup>KU Leuven, <sup>4</sup>INSAIT <br> WACV 2024 </span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://arxiv.org/abs/2309.04561" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b> As 3D perception problems grow in popularity and the need for large-scale labeled datasets for LiDAR semantic segmentation increase, new methods arise that aim to reduce the necessity for dense annotations by employing weakly-supervised training. However these methods continue to show weak boundary estimation and high false negative rates for small objects and distant sparse regions. We argue that such weaknesses can be compensated by using RGB images which provide a denser representation of the scene. We propose an image-guidance network (IGNet) which builds upon the idea of distilling high level feature information from a domain adapted synthetically trained 2D semantic segmentation network. We further utilize a one-way contrastive learning scheme alongside a novel mixing strategy called FOVMix, to combat the horizontal field-of-view mismatch between the two sensors and enhance the effects of image guidance. IGNet achieves state-of-the-art results for weakly-supervised LiDAR semantic segmentation on ScribbleKITTI, boasting up to 98% relative performance to fully supervised training with only 8% labeled points, while introducing no additional annotation burden or computational/memory cost during inference. Furthermore, we show that our contributions also prove effective for semi-supervised training, where IGNet claims state-of-the-art results on both ScribbleKITTI and SemanticKITTI.