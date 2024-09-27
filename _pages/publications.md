---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">For a comprehensive list if all my publications, please visit my Google Scholar <a href="{{site.author.googlescholar}}" style="color: rgb(19, 82, 39);">page</a>.
Selected publications are highlighted in green.</div> 
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
