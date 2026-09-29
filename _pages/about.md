---
layout: minimal
permalink: /
title: Ozan Ünal
home: true
---

<section class="profile" aria-labelledby="profile-name">
  <div class="profile-top">
    <div class="profile-identity">
      <img class="portrait" src="{{ '/images/avatar.png' | relative_url }}" width="160" height="160" alt="Ozan Ünal">
      <h1 id="profile-name">Ozan Ünal</h1>
    </div>
    <div class="profile-bio">
      <p>I am a Principal Machine Learning and Computer Vision Research Scientist at Huawei, Zurich, where I lead the Image Restoration team. My team develops on-device, memory- and compute-efficient methods for image restoration and computational photography, including flicker debanding, demoireing, inpainting, and super-resolution for next-generation flagship camera pipelines. Before joining Huawei, I received my PhD from ETH Zurich under the supervision of Prof. Dr. Luc Van Gool. My doctoral research focused on data-efficient LiDAR semantic segmentation, with additional work on 3D visual grounding.</p>
    </div>
  </div>
  <div class="home-tools">
    <nav class="icon-group" aria-label="Main navigation">
      <button class="icon-button" id="news-toggle" data-panel-toggle type="button" aria-label="News" data-label="News" aria-expanded="false" aria-controls="news">{% include ui-icon.html name="news" %}<span class="panel-indicator" aria-hidden="true">+</span></button>
      <button class="icon-button" id="papers-toggle" data-panel-toggle type="button" aria-label="Papers" data-label="Papers" aria-expanded="false" aria-controls="papers">{% include ui-icon.html name="papers" %}<span class="panel-indicator" aria-hidden="true">+</span></button>
      <button class="icon-button" id="patents-toggle" data-panel-toggle type="button" aria-label="Patents" data-label="Patents" aria-expanded="false" aria-controls="patents">{% include ui-icon.html name="patents" %}<span class="panel-indicator" aria-hidden="true">+</span></button>
      <button class="icon-button" id="cv-toggle" data-panel-toggle type="button" aria-label="CV" data-label="CV" aria-expanded="false" aria-controls="cv">{% include ui-icon.html name="cv" %}<span class="panel-indicator" aria-hidden="true">+</span></button>
    </nav>
    <span class="tools-divider" aria-hidden="true"></span>
    <div class="icon-group" role="group" aria-label="Research and social profiles">
      <a class="icon-button" href="{{ site.author.googlescholar }}" aria-label="Google Scholar" data-label="Google Scholar">{% include ui-icon.html name="scholar" %}</a>
      <a class="icon-button" href="https://github.com/{{ site.author.github }}" aria-label="GitHub" data-label="GitHub">{% include ui-icon.html name="github" %}</a>
      <a class="icon-button" href="https://www.linkedin.com/in/{{ site.author.linkedin }}/" aria-label="LinkedIn" data-label="LinkedIn">{% include ui-icon.html name="linkedin" %}</a>
      <a class="icon-button" href="{{ site.author.orcid }}" aria-label="ORCID" data-label="ORCID">{% include ui-icon.html name="orcid" %}</a>
      <a class="icon-button" href="https://www.youtube.com/channel/{{ site.author.youtube }}" aria-label="YouTube" data-label="YouTube">{% include ui-icon.html name="youtube" %}</a>
    </div>
  </div>
</section>

<div class="home-panels">
<section id="news" class="expandable-panel news-panel" aria-labelledby="news-heading" hidden>
  <div class="news-inner">
    <h2 id="news-heading">News</h2>
    <ol class="news-list">
      {% for item in site.data.news %}
      <li><time datetime="{{ item.date }}">{{ item.date }}</time><div>{{ item.text }}</div></li>
      {% endfor %}
    </ol>
  </div>
</section>
<section id="papers" class="expandable-panel papers-panel" aria-labelledby="selected-heading" hidden>
  <div class="papers-inner">
    {% include papers-section.html %}
  </div>
</section>
<section id="patents" class="expandable-panel patents-panel" aria-labelledby="patents-heading" hidden>
  <div class="panel-inner">
    {% include patents-section.html %}
  </div>
</section>
<section id="cv" class="expandable-panel cv-panel" aria-labelledby="cv-heading" hidden>
  <div class="panel-inner">
    {% include cv-section.html %}
  </div>
</section>
</div>
<noscript><style>.expandable-panel[hidden] { display: block !important; } [data-panel-toggle] { display: none; }</style></noscript>
