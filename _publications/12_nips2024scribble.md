---
title: "Scribbles for All: Benchmarking Scribble Supervised Segmentation Across Datasets"
collection: publications
venue: Neural Information Processing Systems
abbr: NeurIPS
year: 2024
award: Spotlight
authors: Wolfgang Boettcher, Lukas Hoyer, <b>Ozan Unal</b>, Jan Eric Lenssen, Bernt Schiele
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
            <h1 class="title is-3 publication-title">Scribbles for All: Benchmarking Scribble Supervised Segmentation Across Datasets</h1>
            <div class="is-size-6 publication-authors">
                <span class="author-block">
                    Wolfgang Boettcher<sup>1</sup>, Lukas Hoyer<sup>2</sup>, Ozan Unal<sup>2,3</sup>, Jan Eric Lenssen<sup>1</sup>, Bernt Schiele<sup>1</sup>
                </span>
            </div>
            <div class="is-size-6 publication-authors">
                <span class="author-block"><sup>1</sup>MPI, <sup>2</sup>ETH Zurich,  <sup>3</sup>Huawei Technologies <br> NeurIPS 2024 Spotlight</span>
            </div>
            <div class="column has-text-centered">
                <div class="publication-links">
                    <span class="link-block">
                        <a href="https://arxiv.org/abs/2408.12489" target="_blank"
                        class="external-link button is-normal is-rounded is-dark">
                            <span>Paper</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>     
    </div>
</div>
<p style="text-align: justify;"><b>Abstract:</b>  In this work, we introduce Scribbles for All, a label and training data generation algorithm for semantic segmentation trained on scribble labels. Training or fine-tuning semantic segmentation models with weak supervision has become an important topic recently and was subject to significant advances in model quality. In this setting, scribbles are a promising label type to achieve high quality segmentation results while requiring a much lower annotation effort than usual pixel-wise dense semantic segmentation annotations. The main limitation of scribbles as source for weak supervision is the lack of challenging datasets for scribble segmentation, which hinders the development of novel methods and conclusive evaluations. To overcome this limitation, Scribbles for All provides scribble labels for several popular segmentation datasets and provides an algorithm to automatically generate scribble labels for any dataset with dense annotations, paving the way for new insights and model advancements in the field of weakly supervised segmentation. In addition to providing datasets and algorithm, we evaluate state-of-the-art segmentation models on our datasets and show that models trained with our synthetic labels perform competitively with respect to models trained on manual labels. Thus, our datasets enable state-of-the-art research into methods for scribble-labeled semantic segmentation. The datasets, scribble generation algorithm, and baselines are publicly available.</p>
