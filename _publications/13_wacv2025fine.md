---
title: "Fine-Grained Spatial and Verbal Losses for 3D Visual Grounding"
collection: publications
venue: Winter Conference on Applications of Computer Vision
abbr: WACV
year: 2025
authors: Sombit Dey, <b>Ozan Unal</b>, Christos Sakaridis, Luc Van Gool
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
            <h1 class="title is-3 publication-title">Fine-Grained Spatial and Verbal Losses for 3D Visual Grounding</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Sombit Dey<sup>1,2</sup>, Ozan Unal<sup>1,3,*</sup>, Christos Sakaridis<sup>1</sup>, Luc Van Gool<sup>1,2,3,4</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>ETH Zurich, <sup>2</sup>INSAIT, <sup>3</sup>Huawei Technologies, <sup>4</sup>KU Leuven<br><sup>*</sup> Corresponding author<br>WACV 2025</span>
            </div>
            <!-- <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://arxiv.org/abs/" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div> -->
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b>  3D visual grounding consists of identifying the instance in a 3D scene which is referred by an accompanying language description. While several architectures have been proposed within the commonly employed grounding-by-selection framework, the utilized losses are comparatively under-explored. In particular, most methods rely on a basic supervised cross-entropy loss on the predicted distribution over candidate instances, which fails to model both spatial relations between instances and the internal fine-grained word-level structure of the verbal referral. Sparse attempts to additionally supervise verbal embeddings globally by learning the class of the referred instance from the description or employing verbo-visual contrast to better separate instance embeddings do not fundamentally lift the aforementioned limitations. Responding to these shortcomings, we introduce two novel losses for 3D visual grounding: a visual-level offset loss on regressed vector offsets from each instance to the ground-truth referred instance and a language-related span loss on predictions for the word-level span of the referred instance in the description. In addition, we equip the verbo-visual fusion module of our new 3D visual grounding architecture AsphaltNet with a top-down bidirectional attentive fusion block, which enables the supervisory signals from our two losses to propagate to the respective converse branches of the network and thus aid the latter to learn context-aware instance embeddings and grounding-aware verbal embeddings. AsphaltNet proposes novel auxiliary losses to aid 3D visual grounding with competitive results compared to the state-of-the-art on the ReferIt3D benchmark.