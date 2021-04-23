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

{% assign start_date = '23-03-2021 00:00:00' | date: '%s' %}
{% assign today = site.time | date: '%s' %}
{% assign seconds_since = today | minus: start_date %}
{% assign hours_since = seconds_since | divided_by: 60 | divided_by: 60 %}
{% assign days_since = hours_since | divided_by: 24 %}
{% assign weeks_since = days_since | divided_by: 7.0 %}
{% assign hours_per_week = total_hours | divided_by: weeks_since | round: 1 %}

![Desktop View](https://lh3.googleusercontent.com/jaQ1AWF__virQ_KHinRNqlEADo75qDH9ELZvUXp4MR8Lp20077jocDrz3tA1x-hPyg4TgPSogJjAQgbqY9XU-ovsDDuGGyEsx45n4BQA9xM4RFmPaR_6rfIxoR5S5aZwkfFZH7tWumM=w2400)

## About
N95ZB is a [CarbonCub EX2](http://cubcrafters.com/carboncub/ex) (CCK-1865) I am building in my 2 car garage in the Denver, CO area. The wing and fuselage kits shipped on Tuesday March 23, 2021 and the finish kit is scheduled to ship on Wednesday July 21, 2021.

## Build Stats
* Total hours: {{total_hours}}
* Total posts: {{build_posts | size}}
* Start date: March 23, 2021
* Days since start: {{ days_since }}
* Average hours per week: {{ hours_per_week }}