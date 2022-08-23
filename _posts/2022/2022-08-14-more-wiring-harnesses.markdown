---
layout: build_log_post
title:  "More Wiring Harnesses"
hours: 2.7
date:   2022-08-14 12:00:00 -0600
categories: [Carbon Cub Build, Wings]
tags: [wiring]
---

I just got back from 2 weeks away to Airventure and then another vacation so I was ready to get back to work. Getting to see some finished Carbon Cubs at Airventure, and even fly in one, was great motivation!

Based on a discussion with Mark Keneston at Cub Crafters, I first decided to re-squeeze the 1/8" solid rivets on the #5 capstrip on each wing since I showed him pictures and he thought they weren't squeezed quite enough. After getting these squared away and confirming with a rivet gauge they they were correct I also double checked the 3/32" solid rivets in each wing using a set of digital calipers. It turned out they were already within standards but it didn't hurt to double check.

With that done, I still wanted to get fully caught up with the center section of the wing (gluing/riveting in the false rib and installing the final rivet in center rib #7) before I moved on to the false spars so I picked back up where I left off with the landing light wiring harnesses.

A bit more detail about the harnesses I made in case someone wants to replicate what I did:
* I talked to an engineer at AeroLEDs at length and they recommended 18ga, 2 conductor wire.
* I used shielded mil-spec wire as is typical in aviation applications. Specifically, [M27500-18TG2T14](https://www.wiremasters.net/product/M27500-18TG2T14).
* I terminated the shield on one end using a [solder sleeve](https://www.aircraftspruce.com/catalog/elpages/edmo_11-18237.php). This is what was done on the factory-supplied harness so I replicated it for mine. When I asked Cub Crafters about the shield termination they said that 22ga was fine and that, as a rule of thumb, wires where you are trying to keep interference out have their shields terminated at one end while wires where you are trying to keep interference in are terminated at both. This is why the wingtip light harness has its shield terminated at both ends.
* I used a [3-pin molex connector](https://www.steinair.com/product/3-circuit-molex-connector/) at the wing root for hookup. This is better than the connector on the supplied harness since it clips together and can't accidentally work it's way apart.
* On the other (light) end I used [crimp on ring terminals for #8 screws](https://www.steinair.com/product/red-insulated-22-18awg-crimp-ring-terminal-for-8-screws-studs/) which are the same as the terminals on the supplied harness. I also used a bit of black heat-shrink tubing where the outer jacket and shield were removed from the light side of the harness.
* Before shrinking the heat shrink on the light side of the harness, I tested continuity of the shield to the wing-root side pin I installed in the molex connector. I also tested the continuity of the other wires.
* I used [3/16" diameter Brady heat-shrink labels](https://www.bradyid.com/labels/bmp21-plus-series-permasleeve-heat-shrink-tubing-cps-3392081?part-number=m21-187-c-342) to label the harnesses at the wing-root side.

As far as the procedure goes, I found that the following worked best:
1. Strip the jacket off 2.75" of wire. Remove the shield (Stein has great videos about how to do this and other tasks on their [YouTube channel](https://www.youtube.com/c/SteinAir)).
1. Remove another small section of shield (1/4" or so, should be enough that the solder on the solder sleeve can be centered on it and that there is a bit of jacket/inner wires sticking into the center part of the sleeve past the adhesive rings on the solder sleeve).
1. Position the solder sleeve on the wire and tape the lead wire to the other wires using masking tape to keep it in place.
1. Allow heat gun to warm up fully. Heat solder sleeve until solder flows. Likely need to rotate sleeve some during heating. This can take a while so I tried to hold the wire at least 12" from the solder sleeve so that I wouldn't get burned by the hot air (I had to play around to figure out how to do this wile being able to rotate the wire).
1. Cut the lead wire from the solder sleeve to the same length as the other exposed wires.
1. Crimp molex pins onto each wire. A [dedicated tool](https://www.steinair.com/product/molex-open-barreled-pin-crimper/) for this job is well worth it since it creates a very solid connection and makes the job quick/painless.
1. Insert the pins into the Molex connector, paying special attention to pin order.
1. Cut the wire to length (I ended up making them just slightly longer than the factory supplied harnesses, maybe an inch).
1. Slide the heat shrink label over the wire from the newly cut end and shrink on near the solder sleeve.
1. Cut a piece of black heat shrink to size and slide over the wire. Do not shrink yet.
1. Strip about 2.5" of jacket from the newly cut end of the wire. Test continuity between the exposed shield and the shield termination pin installed on the other end.
1. Remove the shield and shrink the heat shrink to cover the joint where the shield is partially exposed/where the jacket ends.
1. Crimp the ring terminals on the end of each wire. A [ratcheting crimper](https://www.steinair.com/product/ratcheting-crimper-frame-only/) is well worth it for this job.
1. Test the continuity from the ring terminals to the pins in the molex connector.

This process worked well for making the harnesses and I was able to modify my first harness to a more appropriate length and make a new one using this method. I'm going to make harnesses for Craig too so I still have 2 more to do but at least I have the process down now.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AqW_-lm7ji0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>