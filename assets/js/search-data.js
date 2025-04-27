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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
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
      },{id: "post-dockerizing-and-deploying-your-app-to-docker-hub",
        
          title: "Dockerizing and Deploying Your App to Docker Hub",
        
        description: "Here&#39;s a detailed step-by-step guide on how to create a Docker application, build a Docker image, push it to Docker Hub, and link GitHub with Docker Hub for free.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/docker/";
          
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
            },},{id: "books-let-39-s-go",
          title: 'Let&amp;#39;s Go',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lets_go/";
            },},{id: "books-programming-ruby-3-3",
          title: 'Programming Ruby 3.3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/programming_ruby_3_3/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-the-practice-of-programming",
          title: 'The Practice of Programming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_practice_of_programming/";
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
          section: "News",},{id: "projects-into-the-void",
          title: 'Into the Void',
          description: "Space shooter game",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-medimartxpress",
          title: 'Medimartxpress',
          description: "Fostering accessibility for all Kenyans, Medimartxpress is steadfast in providing a seamless experience for accessing premium, secure, and budget-friendly medicine and wellness products online.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-atm-sim",
          title: 'ATM SIM',
          description: "ATM sim app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
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
