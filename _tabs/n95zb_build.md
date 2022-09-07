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
N95ZB is a [CarbonCub EX2](http://cubcrafters.com/carboncub/ex) (CCK-1865) I am building in my 2 car garage in the Denver, CO area. The wing and fuselage kits arrived on April 1, 2021 and the finish kit arrived on August 11, 2021.

I started with, and am currently working on, the wing kit.

## Build Stats
* Total hours: {{total_hours}}
* Total posts: {{build_posts | size}}
* Start date: March 23, 2021
* Days since start: {{ days_since }}
* Average hours per week: {{ hours_per_week }}

## Kit Options

### Auxiliary fuel tanks
Since I'm not limiting the gross weight to the 1,320lbs LSA limit, I decided that the extra range would be worthwhile and worth sacrificing the extra weight of the tanks and unusable fuel. This also seems to be a common option.

### Extended baggage
Again, this seems like a common option for non-LSA aircraft and makes the plane much more practical for trips and camping.

### 3x3 landing gear
The increased prop clearance seems nice as well as the extra braking power afforded without tipping forward.

### Dual landing lights/LED lighting package
I wanted wig-wag functionality for increased visibility and LED lights are simpler and require less maintenance in general.

### Oregon Aero seats (front and rear)

### 31" tires

### 1.75" brakes
It seems like the standard brakes don't provide enough force to be very effective with the larger tires.

### Stainless steel brake lines
I plan to leave the landing gear uncovered so these are necessary.

### Gap seals
These are light and easy to install. I've also heard reports that they increase elevator effectiveness.

### Rudder cable covers
I didn't like the idea of exposed rudder cables in the extended baggage area so these provide a clean solution for protecting them.

### Power distribution kit
I'm planning on building my own panel but this kit helps with some of the basic harnesses and provides some necessities like the cabin heat control.

### G3x Precover Parts
This provides brackets and wires that are needed for the Garmin G3x system and that should be installed before the plane is covered. Even though I knew I wanted to make my own panel it was much easier to get all of these parts supplied than to have to track them down individually and/or risk missing something.

## Modifications

### Landing and wingtip lights
I plan on using [95W AeroLED landing lights](https://aeroleds.com/products/sunspot-36-4000-landing-light/) that are much brighter than the stock lights and also want the option of using AeroLED (or other) wingtip lights instead of the provided Aveo lights in the future. Both of these things require increasing the wire gauge so I built my own harnesses instead of using the provided ones. See [this thread](https://forum.cubcrafters.com/showthread.php/3846-New-AeroLED-Landing-Lights) for the inspiration behind this change.