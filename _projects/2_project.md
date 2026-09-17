---
layout: page
title: Saka Rieng
description: An offline-first scavenger hunt adventure game that turns campsites and cities into interactive playgrounds for team-building.
img: assets/img/saka-rieng/ic_launcher-playstore.png
importance: 5
category: fun
mermaid:
  enabled: true
  zoomable: true
---

### Saka Rieng

**Project Purpose:**  
Saka Rieng is an epic scavenger hunt adventure game that turns your campsite and city into interactive playgrounds. Built as an **offline-first treasure hunt app** for team-building adventures, it lets players explore city landmarks and nature trails while solving clues, with a companion mascot ("Saka") guiding the journey.

Designed for camps, retreats, and group activities, Saka Rieng combines **text riddles, GPS perimeter locks, and photo evidence** for multi-modal clue validation — with seamless sync when connectivity returns.

---

**Key Features:**

**Quest Builder (Game Manager)**

- Create custom hunts with drag-and-drop clues
- Map pin selection for location-based challenges
- Text, photo, and GPS validation per clue

**GM Dashboard**

- Live waiting room with join request approval
- Real-time team progress monitoring

**Active Gameplay**

- Offline clue rendering — play anywhere, even without signal
- Text answer matching for riddle-style clues
- Haversine GPS validation for perimeter-locked locations
- Photo evidence with GM approval PIN flow

**Saka Companion**

- Dynamic mood states based on time spent per clue: idle → peeking → glowing hint → waving
- Adds personality and gentle pacing to the adventure

**Settings**

- Sound, haptics, and reduce motion toggles

**Offline-First**

- Progress queued locally and flushed on reconnect
- Powered by SharedPreferences + Firestore native offline cache

---

**Closed Testing:**

Saka Rieng is currently in **closed testing** on Google Play. If you'd like to join the playtest, please reach out and I'll add you to the tester list.

- [Join the Closed Test](https://play.google.com/apps/testing/com.sakarieng.app)
- **Contact:** [Email me](mailto:your-email@example.com) to request access

---

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/saka-rieng/home.jpeg" title="Home — Join or Host a Game" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/saka-rieng/build-hunts.jpeg" title="Game Manager — Create a Game" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/saka-rieng/quest-builder.jpeg" title="Quest Builder — Create Clues" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/saka-rieng/create-quest.jpeg" title="Game Manager — Adding Clues" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/saka-rieng/invite-players.jpeg" title="Invite Players — Game Code" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Turn any campsite or city into an interactive playground — build quests, invite players, and watch teams race to the finish.
</div>