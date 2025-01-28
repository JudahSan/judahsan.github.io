---
layout: post
title: Running LLMs Locally with Open Web UI and Ollama
date: 2025-01-27 10:00:00
description: Open Web UI and Ollama Ubuntu setup guide
tags: ollama open-webui ai
categories: llm
tabs: true
---

- Running LLMs Locally has been made fun and trivial with Open Web UI and Ollama
- Ollama simplifies the process of running open-source large language models (LLMs) on your computer
- Opem Web UI is a feature rich, user friendly self hosted AI platform that allows you to interact with AI models.

#### Key Features of Open Web UI and Ollama

- **Easy to Set Up**: Open Web UI provides a simple interface for managing and interacting with local large language models (LLMs).
- **Local Model Hosting**: Ollama allows you to host models locally, reducing dependency on external services and ensuring full control over your data.
- **User-Friendly Interface**: Open Web UI offers a straightforward graphical interface to interact with the models and adjust settings.
- **Multiple Model Support**: Ollama enables you to run multiple LLMs locally, allowing you to switch between different models based on your needs.
- **Customizable**: You can fine-tune models locally or switch between different versions without hassle.
- **Efficient Resource Usage**: Both Open Web UI and Ollama are designed to run efficiently on local hardware, ensuring that even with limited resources, you can still run powerful LLMs.

[Open WebUI Documentation](https://docs.openwebui.com) and [Ollama Documentation](https://ollama.com/) provide detailed installation and usage instructions.

#### Use Cases for Open Web UI and Ollama

- **Personalized AI Assistants**: Run LLMs locally for creating customized personal assistants for various tasks, such as scheduling, reminders, or content generation.
- **Data Privacy**: Host LLMs locally to ensure sensitive data does not leave your machine, offering more control and privacy.
- **Experimentation and Development**: Developers can experiment with different LLMs, fine-tune models, or test different configurations without depending on cloud services.
- **Prototyping and Research**: Ideal for researchers and academics who need to experiment with large language models for various NLP tasks.

> "Open Web UI and Ollama together make it easy to run and manage powerful LLMs locally, enabling you to explore the full potential of AI on your own hardware."

#### Installation Guide for Open Web UI and Ollama with Docker

1. **Quick Start with Docker**:


   - **If Ollama is on your computer**:
     ```bash
     docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
     ```

   - **To run Open WebUI with Nvidia GPU suport**:
     ```bash
     docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cudadocker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
     ```

   - **For Windows**:
     Download the installer from [Ollama's website](https://ollama.com/) and run the installation process.

2. **Open WebUI bundled with Ollama**:


   - **With GPU Support**:
     ```bash
     docker run -d -p 3000:8080 --gpus=all -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
     ```

   - **CPU Only**
     ```bash
     docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:ollama
     ```

   - Start the web UI:
     ```bash
     npm start
     ```

   This will run Open Web UI on your local machine, typically accessible at `http://localhost:3000`.

3. **Configure and Run Models Locally**:
   - Open Web UI will allow you to select which LLM you want to run. Make sure Ollama is properly installed and configured.
   - Start interacting with the models through the Open Web UI interface, adjusting settings and parameters to suit your needs.

#### [Issue with Open Web UI not listing the models of Ollama](https://github.com/open-webui/open-webui/discussions/4376)

If you're seeing a connection error when trying to access Ollama, it might be because the WebUI docker container can't talk to the Ollama server running on your host. Let’s fix that:

    - Adjust the Network Settings 🛠️: Use the --network=host flag in your Docker command. This links your container directly to your host’s network.

    - Change the Port: Remember that the internal port changes from 3000 to 8080.

Example Docker Command:

```bash
docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

or

- Pass a different port to the container e.g `-e PORT=48080`

```bash
docker run -d -e PORT=48080 --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

🔗 After running the above, your WebUI should be available at http://localhost:48080.

#### Example Usage

```bash
# Start Ollama with a specific model
ollama run deepseek-r1

# Interact with the model via Open Web UI
# Open a web browser and navigate to http://localhost:3000 to interact with your local model
```
