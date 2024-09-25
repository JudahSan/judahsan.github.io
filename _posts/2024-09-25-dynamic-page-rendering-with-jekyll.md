---
layout: post
title: Dynamic page rendering with Jekyll
date: 2024-07-01 10:00:00
description: Understanding dynamic page rendering with jekyll
tags: jekyll liquid-templating front-matter
categories: technology
tabs: true
---

Jekyll is static site generator. It talks your content, renders markdown or liquid template and generates a fully
static website.
It processes your assets(HTML,CSS,JS) along with content files(Markdown) using the liquid templating system in order to
generate a static site.

#### Key Features Jekyll

- **Front Matter**: A yaml snippet placed between two triple-dashed lines at the start of a file. It is used to define metadata.
- **Layouts**: Templates that wrap around your content. Used to defined common structure for multiple pages.
- **Collections**: Collections allow you to group related contents in a structured way.


[Jekyll Documentation](https://jekyllrb.com/docs/) provides comprehensive details on how to get started and utilize
its features.

#### Test case: rendering individual speaker pages

1. Organize Speaker Data 

Create a `_speaker` folder and add a markdown or liquid file for all speakers(speaker-one.md)

```yml
---
layout: speaker
name: "Ken Takakura"
bio: "Founder - Okarun Alien Tech"
details: "Ken Takakura has been in the alientech industry for 2+ years."
image: "/images/speakers/compressed/ken_takakura.jpeg"
talk_title: "UFOs for nonbelievers"
talk_description: ""
twitter: https://x.com/ken_takakura
website: https://okarun.alientech/
linkedin:  https://www.linkedin.com/in/ken_takakura
is_keynote: false
gender: male
permalink: /speakers/ken_takakura/
sessions:
  -   day: 1
      time: "2:55 PM - 4:25 PM"
      title: "UFOs for nonbelievers"
      talk_description: "TBA"
---
```

2. Create Speaker Layout

Create a `speaker.html` file in the `_layouts` folder. This will serve as the layout for the speakers pages.

```html

<!-- Speaker Detail -->
<section class="speaker-detail">
    <div class="auto-container">
        <div class="row">
            <div class="image-column col-lg-4 col-md-12 col-sm-12">
                <div class="image-box">
                    <figure class="image">
                        <img src="{{ page.image }}" alt=" page.name "/>
                    </figure>
                    <ul class="social-icon-two social-icon-colored text-center">
                        {% if page.twitter and page.twitter != "" %}
                        <li>
                            <a href="{{ page.twitter }}" target="_blank"
                            ><i class="fa-brands fa-x-twitter"></i
                            ></a>
                        </li>
                        {% endif %}
                        {% if page.linkedin and page.linkedin != "" %}
                        <li>
                            <a href="{{page.linkedin}}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </li>
                        {% endif %}
                        {% if page.website and page.website != "" %}
                        <li>
                            <a href="{{page.website}}" target="_blank"
                            ><i class="fab fa-sistrix"></i
                            ></a>
                        </li>
                        {% endif %}
                    </ul>
                </div>
            </div>

            <div class="info-column col-lg-8 col-md-12 col-sm-12">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h3 class="card-title text-info-emphasis">{{ page.name }}</h3>
                        <h5 class="text-secondary font-weight-bold">{{ page.bio }}</h5>
                        <p class="card-text text-black">
                            {{ page.details }}
                        </p>
                        <h4 class="mt-4 text-info-emphasis">Talks by {{ page.name }}</h4>
                        <div class="row">
                            {% for session in page.sessions %}
                            <div class="col-lg-6 col-md-6 mb-3">
                                <div class="border p-3 bg-white rounded shadow-sm">
                                    <h5 class="text-danger-emphasis font-weight-bold">Day {{ session.day }}</h5>
                                    <span class="text-muted">{{ session.full_day }}</span>
                                    <span class="d-block">{{ session.time }}</span>
                                    <p class="mt-2 font-weight-bold text-info-emphasis">{{ session.title }}</p>
                                    {% if session.talk_description != "TBA" %}
                                    <div class="text-info-emphasis ">
                                        {{ session.talk_description }}
                                    </div>
                                    {% endif %}
                                    {% if session.panelists %}
                                    <h6 class="text-secondary">Panelists:</h6>
                                    <ul class="list-unstyled">
                                        {% for panelist in session.panelists %}
                                        <li class="mb-2">
                                            <a href="{{ panelist.permalink }}" class="text-dark d-flex align-items-center">
                                                <img src="{{ panelist.image }}" class="rounded-circle mr-2" alt="{{ panelist.name }}" style="width: 30px; height: 30px;" />
                                                {{ panelist.name }}
                                            </a>
                                        </li>
                                        {% endfor %}
                                    </ul>
                                    {% endif %}
                                </div>
                            </div>
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--End Speaker Detail -->

```

3. Connect to Speaker Pages

```html
---
layout: application
permalink: /speakers
title: "Speakers for Ruby Conf Africa 2024"
description: "Meet the incredible lineup of Ruby experts sharing their knowledge at Ruby Conf Africa 2024.  Browse speaker profiles, session topics, and more."
image: "/images/logo/arc_logo_coloured.png"
---

<!-- Start Speakers Section -->
<section class="speakers-section-two" style="margin-top: 0;">
    <div class="auto-container">
        <div class="sec-title text-center my-4">
            <span class="display-4 text-danger font-weight-bold">Speakers</span>
        </div>
        <div class="row top-pd-mobile">
            {% for speaker in site.speakers %}
            {% if speaker.is_keynote == true %}
            {% include speaker-block.liquid speaker=speaker designation="Keynote Speaker " %}
            {% endif %}
            {% endfor %}
          
            {% for speaker in speakers %}
            {% if speaker.is_keynote == false %}
            {% include speaker-block.liquid speaker=speaker designation="Speaker" %}
            {% endif %}
            {% endfor %}
        </div>

    </div>
</section>
<!-- End Speakers Section -->
```
