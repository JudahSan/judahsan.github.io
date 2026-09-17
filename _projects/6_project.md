---
layout: page
title: RubyConf Africa Website
description: Official website for RubyConf Africa, built with Jekyll and maintained by community contributors.
img: assets/img/rubyconf_cover.png
importance: 2
category: open-source
---

### RubyConf Africa Website

**About the Project:**  
[RubyConf Africa](https://rubyconf.africa/) is the official conference for the African Ruby Community (ARC), bringing together Rubyists, developers, and entrepreneurs from across East Africa and beyond. The conference serves as a platform for learning, networking, and showcasing Ruby's impact in the region.

The website is built with **Jekyll** and hosted on **GitHub Pages**, providing a simple, maintainable, and community-driven platform for conference announcements, schedules, speakers, and registration.

**My Role:**  
I contribute to the **development and maintenance** of the RubyConf Africa website. My work has included:

- Building and refining the site structure using **Jekyll**
- Creating dynamic sections for **speakers, sponsors, and schedule** from structured data
- Improving design and styling with **Bootstrap + CSS + JS**
- Supporting deployment and updates via **GitHub Actions + Pages**
- **Migrating the main site to Tailwind CSS**, with legacy Bootstrap content moved to an archive directory
- Configuring **independent environments** for both frameworks, connected via URL-based navigation to avoid CSS conflicts
- **Reorganizing the archive system** (2015–2025) to mirror the modern architecture:
    - Layouts restructured under `_layouts/archive/`
    - Includes restructured under `_includes/archive/` (components in subfolder)
    - Data reorganized as `_data/archive/YYYY/` (sponsors, speakers, schedule, meta)
    - Archive pages made **data-driven** via `site.data.archive[page.year]`
    - Unified navigation through a single source `_data/conference/archive_years.yml`
- Ensuring backward compatibility during migration, with speaker detail pages (e.g., `/2024/speakers/matz`) working correctly

**Tech Stack:**

- **Site Generator:** Jekyll (Ruby-based static site generator)
- **Styling:** Tailwind CSS, Bootstrap (archived), CSS, JavaScript
- **Hosting:** GitHub Pages

**Note:**  
This project is part of my contribution to the African Ruby Community. It was not built solely by me, but I actively contribute to maintaining and improving the site.

**Links:**

- [Visit RubyConf Africa Website](https://rubyconf.africa/)
- [View on GitHub](https://github.com/nairuby/rubyconf.africa)

---

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/ruby_conf_africa.png" title="RubyConf Africa Homepage" class="img-fluid rounded z-depth-1" %}
  </div>

</div>
<div class="caption">
  The RubyConf Africa website — showcasing the conference, speakers, and schedule.
</div>