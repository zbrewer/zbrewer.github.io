---
layout: page
title: N95ZB Build
image:
  src: https://lh3.googleusercontent.com/jaQ1AWF__virQ_KHinRNqlEADo75qDH9ELZvUXp4MR8Lp20077jocDrz3tA1x-hPyg4TgPSogJjAQgbqY9XU-ovsDDuGGyEsx45n4BQA9xM4RFmPaR_6rfIxoR5S5aZwkfFZH7tWumM=w2400
---

{% assign build_posts = site.posts | where_exp: "item", "item.layout == 'build_log_post'"  %}

{% assign total_hours = 0 %}
{% for entry in build_posts %}
  {% assign entry_hours = entry.hours | default: 0 %}
  {% assign total_hours = total_hours | plus: entry_hours %}
{% endfor %}

![Desktop View](https://lh3.googleusercontent.com/jaQ1AWF__virQ_KHinRNqlEADo75qDH9ELZvUXp4MR8Lp20077jocDrz3tA1x-hPyg4TgPSogJjAQgbqY9XU-ovsDDuGGyEsx45n4BQA9xM4RFmPaR_6rfIxoR5S5aZwkfFZH7tWumM=w2400)

## About
N95ZB is a [CarbonCub EX2](http://cubcrafters.com/carboncub/ex) (CCK-1865) I am building in my 2 car garage in the Denver, CO area. The wing and fuselage kits shipped on Tuesday March 23, 2021 and the finish kit is scheduled to ship on Wednesday July 21, 2021.

## Build Summary
* Total hours: {{total_hours}}
* Total posts: {{build_posts | size}}