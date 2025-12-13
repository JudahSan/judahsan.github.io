---
layout: page
title: TMS Companion App
description: A cross-platform tool to help you stay consistent in your TMS memorization, offering series, songs, plenary guides, and more.
img: assets/img/tms-cover.png
importance: 5
category: work
mermaid:
  enabled: true
  zoomable: true
---

### TMS Companion App

**Project Purpose:**  
The TMS Companion App is designed to make memorization and study in the Topical Memorization Series (TMS) easier, accessible, and portable. Whether you’re on **mobile, PC, or tablet**, the app ensures you can stay consistent in your journey anytime and anywhere.

**Key Features:**

- Topical Memorization Series (A–E)
- Lyrics Catalog for plenary and group activities
- Plenary Guides & Illustrations
- GRID Series verses from the GRID books
- Multi-language support (Kenyan dialects + international)
- Optimized for **mobile-first use** with responsive design

**Cross-Platform:**  
Built as a **progressive web app (PWA)**, the TMS Companion runs seamlessly on mobile, tablet, and desktop. You can install it on your phone just like a native app.

**Link to Project:**  
[Visit TMS Companion App](https://tms-companion.netlify.app)

---

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_home.jpeg" title="Mobile Home" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_series.jpeg" title="Mobile Series Page" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_study.jpeg" title="Mobile Studies Page" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_playlist.jpeg" title="Mobile Public Shareable Playlist Page" class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_songs.jpeg" title="Mobile Songs Page" class="img-fluid rounded z-depth-1" %}
  </div>
<div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_song.jpeg" title="Mobile Single Song Page" class="img-fluid rounded z-depth-1" %}
  </div>
<div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_menu.jpeg" title="Mobile Menu Page" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Mobile-first experience — installable and fully responsive.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_series_light.png" title="TMS Series" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Structured memorization through the Topical Memorization Series (A–E).
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_songs_light.png" title="Songs Catalog" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Access a catalog of songs used during plenary and group activities.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_plenary.png" title="Plenary Guides" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Visual guides and tools to support plenary sessions and sharing.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_grid.png" title="GRID Verses" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Dedicated support for GRID series verses from the GRID books.
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/tms_languages.png" title="Language Support" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Support for Kenyan dialects and international languages.
</div>

App Entry & Home Navigation

```mermaid
flowchart TD
    Start([User Opens App]) --> Home["🏠 Home Dashboard"]

    Home --> Verses["📖 Scripture Verses"]
    Home --> Songs["🎵 Song Library"]
    Home --> Studies["📚 Bible Studies"]
    Home --> Settings["⚙️ Settings"]

    Home --> Streak["🔥 Daily Streak"]
    Home --> Request["📝 Request Lyrics"]
```

Verse Browsing & Interaction Flow

```mermaid
flowchart TD
    Verses["📖 Scripture Verses"] --> GridBooks["📋 Grid Book Series"]
    GridBooks --> BookSelect["Select Book 1–5"]
    BookSelect --> VerseGrid["📱 Verse Collection View"]
    VerseGrid --> VerseDetail["📄 Individual Verse"]

    VerseDetail --> VerseActions{"User Actions"}
    VerseActions --> Bookmark["🔖 Bookmark"]
    VerseActions --> Share["📤 Share"]
    VerseActions --> Navigate["Swipe Navigation"]
```

Song Library Flow

```mermaid
flowchart TD
Songs["🎵 Song Library"] --> SongList["🎼 Browse Songs"]
SongList --> Search["🔍 Search and Filter"]
SongList --> SongView["🎤 Song Display"]

    SongView --> SongFeatures{"Song Features"}
    SongFeatures --> Lyrics["📝 View Lyrics"]
    SongFeatures --> Chords["🎸 View Chords"]
    SongFeatures --> Copy["📋 Copy to Clipboard"]
    SongFeatures --> Zoom["🔍 Zoom Text"]
```

Study Flow

```mermaid
flowchart TD
    Studies["📚 Bible Studies"] --> StudyList["📖 Study Library"]
    StudyList --> StudySelect["Choose Study Topic"]
    StudySelect --> StudyView["📑 Study Content"]

    StudyView --> StudyFeatures{"Study Tools"}
    StudyFeatures --> StudyBookmark["🔖 Bookmark Progress"]
    StudyFeatures --> StudyNotes["📝 Take Notes"]
    StudyFeatures --> StudyShare["📤 Share Study"]
```

Settings & App Capabilities

```mermaid
flowchart TD
    Settings["⚙️ Settings"] --> Language["🌐 Language (20+ options)"]
    Settings --> Theme["🎨 Theme Settings"]
    Settings --> Notifications["🔔 Notifications"]
    Settings --> PWA["📱 Install as App"]
```

Admin

```mermaid
flowchart TD
    Home["🏠 Home Dashboard"] --> AdminCheck{"Admin User?"}

    AdminCheck -->|Yes| AdminDash["👑 Admin Dashboard"]
    AdminCheck -->|No| Home

    AdminDash --> AddSong["➕ Add New Song"]
    AdminDash --> AddStudy["➕ Add New Study"]
    AdminDash --> ManageContent["📊 Manage Content"]

```

Mobile Settings

```mermaid
flowchart TD
    VerseDetail["📄 Individual Verse"] --> MobileFeatures["📱 Mobile Features"]

    MobileFeatures --> Haptic["📳 Haptic Feedback"]
    MobileFeatures --> Swipe["👆 Swipe Navigation"]
    MobileFeatures --> AndroidUI["🤖 Android Material UI"]
    MobileFeatures --> iOSUI["🍎 iOS Native Feel"]

```
