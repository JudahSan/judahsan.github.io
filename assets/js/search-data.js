// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },sdaf{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A showcase of my work, experiments, and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Resume",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-straw-hat",
          title: "Straw Hat",
          description: "The legendary crew sailing to find the One Piece",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-how-to-set-up-cloudflare-tunnel-for-local-development",
        
          title: "How to Set Up Cloudflare Tunnel for Local Development",
        
        description: "A guide on how to set up Cloudflare Tunnel for local development and expose your local server to the internet securely.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/cloudflare-tunnel/";
          
        },
      },{id: "post-how-to-download-and-boost-audio-in-youtube-vidoes-guide",
        
          title: "How to Download and Boost Audio in Youtube Vidoes (Guide)",
        
        description: "A guide on how to download and boost audio in youtube videos using youtube-dl and ffmpeg",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/audio-amplification/";
          
        },
      },{id: "post-testing-pull-requests-locally-with-git-worktrees",
        
          title: "Testing Pull Requests Locally with Git Worktrees",
        
        description: "A step-by-step guide to using Git worktrees for PR testing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/git-worktrees/";
          
        },
      },{id: "post-honeypots-a-lightweight-bot-defense-strategy",
        
          title: "Honeypots, A Lightweight Bot Defense Strategy",
        
        description: "Intro to Honeypot",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/honeypot/";
          
        },
      },{id: "post-how-to-set-up-live-reloading-golang",
        
          title: "How to set up live reloading Golang",
        
        description: "Step by step guide to set up live reloading with Air for a Go project",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/go-air/";
          
        },
      },{id: "post-running-llms-locally-with-open-web-ui-and-ollama",
        
          title: "Running LLMs Locally with Open Web UI and Ollama",
        
        description: "Open Web UI and Ollama Ubuntu setup guide",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ollama-open-webui/";
          
        },
      },{id: "post-google-kubernetes-engine",
        
          title: "Google Kubernetes Engine",
        
        description: "An intro to Google Kubernetes Engine in GCP",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/k8s/";
          
        },
      },{id: "post-intro-to-gcp-cloud-shell-and-gcloud",
        
          title: "Intro to GCP Cloud Shell and gcloud",
        
        description: "Learn how to connect to computing resources hosted on Google Cloud via Cloud Shell with the gcloud tool.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cloud-shell-gcloud/";
          
        },
      },{id: "post-creating-a-build-tool-using-go",
        
          title: "Creating A Build Tool Using Go",
        
        description: "Crating a build tool using Go",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/creating-a-build-tool-using-golang/";
          
        },
      },{id: "post-using-tiled-with-kaplay",
        
          title: "Using Tiled with Kaplay",
        
        description: "Using Tiled Web Map Level editor with Kaplay.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tiled-kaplay/";
          
        },
      },{id: "post-redis-a-high-performance-in-memory-data-store",
        
          title: "Redis A High-Performance In-Memory Data Store",
        
        description: "Understanding Redis and its benefits for modern applications",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/redis/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-dockerizing-and-deploying-your-app-to-docker-hub",
        
          title: "Dockerizing and Deploying Your App to Docker Hub",
        
        description: "Here&#39;s a detailed step-by-step guide on how to create a Docker application, build a Docker image, push it to Docker Hub, and link GitHub with Docker Hub for free.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/docker/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-3d-math-primer-for-graphics-and-game-development",
          title: '3D Math Primer for Graphics and Game Development',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/3d_math_primer_for_graphics_and_game_dev/";
            },},{id: "books-dart-apprentice",
          title: 'Dart Apprentice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/dart_apprentice/";
            },},{id: "books-essentialism",
          title: 'Essentialism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/essentialism/";
            },},{id: "books-half-of-a-yellow-sun",
          title: 'Half of a Yellow Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/half_of_a_yellow_sun/";
            },},{id: "books-let-39-s-go",
          title: 'Let&amp;#39;s Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lets_go/";
            },},{id: "books-let-39-s-go-further",
          title: 'Let&amp;#39;s Go Further',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lets_go_further/";
            },},{id: "books-programming-ruby-3-3",
          title: 'Programming Ruby 3.3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/programming_ruby_3_3/";
            },},{id: "books-quitter",
          title: 'Quitter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/quitter/";
            },},{id: "books-system-design-interview",
          title: 'System Design Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/system_design_interview/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-the-power-of-habit",
          title: 'The Power of Habit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_power_of_habit/";
            },},{id: "books-the-practice-of-programming",
          title: 'The Practice of Programming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_practice_of_programming/";
            },},{id: "books-the-secret-lives-of-baba-segi-39-s-wives",
          title: 'The Secret Lives of Baba Segi&amp;#39;s Wives',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_secret_lives_of_baba_segis_wives/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking, Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thinking_fast_and_slow/";
            },},{id: "books-this-child-will-be-great",
          title: 'This Child Will Be Great',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/this_child_will_be_great/";
            },},{id: "books-tiny-c-projects",
          title: 'Tiny C Projects',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/tiny_c_projects/";
            },},{id: "books-writing-an-interpreter-in-go",
          title: 'Writing an Interpreter in Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wirting_an_interpreter_in_go/";
            },},{id: "books-writing-a-compiler-in-go",
          title: 'Writing a Compiler in Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/writing_a_compiler_in_go/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-stella-and-the-threads-of-dawn",
          title: 'Stella and the Threads of Dawn',
          description: "A relaxing yet engaging adventure that blends story, puzzle, and rhythm gameplay — perfect for players who love discovery, contemplation, and narrative-driven experiences.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-tms-app-mobile",
          title: 'TMS App Mobile',
          description: "An tool to help you stay consistent in your TMS memorization, offering series, songs, plenary guides, and more.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-into-the-void",
          title: 'Into the Void',
          description: "A retro-inspired casual space shooter built with Unity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-medimartxpress",
          title: 'Medimartxpress',
          description: "Fostering accessibility for all Kenyans, Medimartxpress provides a seamless experience for accessing premium, secure, and budget-friendly medicine and wellness products online.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-echoes-of-elysium",
          title: 'Echoes of Elysium',
          description: "A fun and simple platformer built with Godot as part of my game development learning journey.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-tms-companion-app",
          title: 'TMS Companion App',
          description: "A cross-platform tool to help you stay consistent in your TMS memorization, offering series, songs, plenary guides, and more.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-african-ruby-community-platform",
          title: 'African Ruby Community Platform',
          description: "Open-source community platform for the African Ruby Community (ARC), built and maintained by contributors across East Africa.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-rubyconf-africa-website",
          title: 'RubyConf Africa Website',
          description: "Official website for RubyConf Africa, built with Jekyll and maintained by community contributors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-admanus-group-platform",
          title: 'Admanus Group Platform',
          description: "Admanus Group.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-operating-systems",
          title: 'Operating Systems',
          description: "CSKlub-OS club MIT 61810 Operating System Engineering .",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/judah_m_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%72%61%6B%61.%6A%75%64%61%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/judahsan", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/judasan", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/judahuzumaki", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/judahsan/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
