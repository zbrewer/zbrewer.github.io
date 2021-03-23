---
layout: page
title: N95ZB Build
---

{% assign build_posts = site.posts | where_exp: "item", "item.layout == 'build_log_post'"  %}

{% assign total_hours = 0 %}
{% for entry in build_posts %}
  {% assign entry_hours = entry.hours | default: 0 %}
  {% assign total_hours = total_hours | plus: entry_hours %}
{% endfor %}

Total hours: {{total_hours}}