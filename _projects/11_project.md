---
layout: page
title: TMS App Mobile
description: An tool to help you stay consistent in your TMS memorization, offering series, songs, plenary guides, and more.
img: assets/img/tms-cover.png
importance: 5
category: work
mermaid:
  enabled: true
  zoomable: true
---

### TMS App Mobile

**Project Purpose:**  
The TMS App Mobile is designed to make memorization with mini games and study in the Topical Memorization Series (TMS)
easier, accessible, and portable. Whether you’re on **mobile, PC, or tablet**, the app ensures you can stay consistent
in your journey anytime and anywhere.

**Key Features:**

- Topical Memorization Series (A–E)
- Hymn Lyrics Catalog
- Plenary Guides & Illustrations
- GRID Series verses from the GRID books
- Multi-language support (Kenyan dialects + international)
- Optimized for **mobile-first use** with responsive design

**Link to Project(Private Beta):**
[Public Beta Testing](https://appdistribution.firebase.dev/i/5a3f2e3abd5b4c6b)

---

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/t_app_series.jpeg" title="Mobile Home" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/t_app_seriesmenu.jpeg" title="Mobile Sidebar" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/t_app_journal.jpeg" title="Mobile Journal" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/t_app_settings.jpeg" title="Mobile Settings Page" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/t_app_grid.jpeg" title="Mobile Grid Page" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/t_app_gridmenu.jpeg" title="Mobile GridMenu Page" class="img-fluid rounded z-depth-1" %}
    </div>

</div>

App Entry & Home Navigation

```mermaid
flowchart TD
    Start([User Opens App]) --> Home["🏠 Home Dashboard"]

    FloatingNav --> Verses["📖 Scripture Verses"]
    FloatingNav --> Journal["📚 Journal"]
    Sidebar --> Settings["⚙️ Settings"]
    Sidebar --> Songs["🎵 Song Library"]

```

Verse Browsing & Interaction Flow

```mermaid
flowchart TD
    Verses["📖 Scripture Verses"] --> GridBooks["📋 Grid Book Series"]
    GridBooks --> BookSelect["Select Book 1–5"]
    BookSelect --> VerseGrid["📱 Verse Collection View"]
    VerseGrid --> VerseDetail["📄 Individual Verse"]

    VerseDetail --> VerseActions{"User Actions"}
    VerseActions --> Navigate["Swipe Up Down Navigation"]
```


Settings & App Capabilities

```mermaid
flowchart TD
    Settings["⚙️ Settings"] --> Language["🌐 Language (20+ options)"]
    Settings --> Theme["🎨 Theme Settings"]
    Settings --> Notifications["🔔 Notifications"]
    
```


Mobile Settings

```mermaid
flowchart TD
    VerseDetail["📄 Individual Verse"] --> MobileFeatures["📱 Mobile Features"]

    MobileFeatures --> Haptic["📳 Haptic Feedback"]
    MobileFeatures --> Swipe["👆 Swipe Navigation"]
    MobileFeatures --> Audio["🤖 Series Audio Player"]
```
