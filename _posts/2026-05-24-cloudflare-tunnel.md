---
layout: post
title: How to Set Up Cloudflare Tunnel for Local Development
date: 2026-05-24 11:59:00
description: A guide on how to set up Cloudflare Tunnel for local development and expose your local server to the internet securely.
tags: guide
categories: technology
tabs: true
mermaid:
  enabled: true
  zoomable: true
---

[Cloudflare Tunnel](https://developers.cloudflare.com/tunnel/) connects your infrastructure to Cloudflare through an outboud-only, [post-quantum encrypted](https://developers.cloudflare.com/ssl/post-quantum-cryptography/).

> Post-quantum cryptography utilizes advanced mathematicsl algorithms (like Kyber) designed to be secure against future quantum computer attacks

Instead of exposing a public IP, you install a lightweight proxy that encrypts your traffic and forwards it to the server.

![img.png](assets/img/cloudflare_tunnel.png)

### Why Use Cloudflare Tunnel?

1. It's free.
2. No [port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) required. Works behind NAT, firewalls, or VPNs.
3. Instant HTTPS. While Cloudflare can use Let's Encrypt, Coudflare Tunnels (especially the free trycloudflare.com quick tunnels) actually dunamically utilize Cloudflare's Edge Certificates (often issued via DigiCert, Google Truest Services, or Let's Encrypt dynamically behind the scenes.) 
4. Temporary public URLs - Perfect for testing webhooks or sharing with teammates

## Quick Setup (5 minutes)

### 1. Install cloudflared

**macOS:**
```bash
brew install cloudflared
```

**Linux:**
```bash
# Download binary directly (fastest)
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
chmod +x cloudflared-linux-amd64
sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared
```

**Windows:**
```powershell
# Using winget
winget install cloudflare.cloudflared
```

### 2. Run Your Local Server

Start your app normally (Rails, Node, Python, etc.):

```bash
# Example for Rails
rails server -p 3000

# Example for Node
pnpm run dev

# Example for Python
python -m http.server 3000
```

### 3. Expose It to the Internet

In a **new terminal window**, run:

```bash
cloudflared tunnel --url http://localhost:3000
```

That's it! You'll see output like:

```
INF Your quick tunnel has been created! Visit it at:
https://random-name.trycloudflare.com
```

Share that URL with anyone. It works until you press `Ctrl+C`.

---

## Common Scenarios

### Test GitHub Webhooks Locally

```bash
# Terminal 1: Your app
rails server -p 3000

# Terminal 2: Tunnel
cloudflared tunnel --url http://localhost:3000

# Use the Cloudflare URL as your webhook endpoint in GitHub
```

### Share with a Remote Teammate

```bash
cloudflared tunnel --url http://localhost:3000
# Send them the trycloudflare.com URL
```

### Multiple Tunnels for Different Services

```bash
# Tunnel to Rails app on port 3000
cloudflared tunnel --url http://localhost:3000

# Another tunnel to API on port 4000 (different terminal)
cloudflared tunnel --url http://localhost:4000
```

---

## Persistent Tunnel with Custom Domain

For a tunnel that stays alive and uses your own domain:

```bash
# 1. Login to Cloudflare
cloudflared tunnel login

# 2. Create a named tunnel
cloudflared tunnel create my-dev-tunnel

# 3. Create config file (~/.cloudflared/config.yml)
cat > ~/.cloudflared/config.yml << EOF
tunnel: my-dev-tunnel
credentials-file: ~./cloudflared/UUID.json

ingress:
  - hostname: dev.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
EOF

# 4. Route DNS
cloudflared tunnel route dns my-dev-tunnel dev.yourdomain.com

# 5. Run tunnel
cloudflared tunnel run my-dev-tunnel
```

Now `https://dev.yourdomain.com` points to your local server.

---

## Useful Commands

```bash
# List all tunnels
cloudflared tunnel list

# Delete a tunnel
cloudflared tunnel delete my-dev-tunnel

# Run with debug logging
cloudflared tunnel --url http://localhost:3000 --log-level debug
```

---

## Troubleshooting

| Issue | Solution                                                                                                                                                                          |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `connection refused` | Your local server isn't running on the specified port                                                                                                                             |
| `tunnel not found` | Create tunnel first or check name spelling                                                                                                                                        |
| `certificate error` | Use `http://` not `https://` for local target service (eg, `cloudflared tunnel --url http://localhost:3000` as cloudflared handles the SSL encryption to the outside world itself |
| Tunnel disconnects | Restart with `--retries 5` flag                                                                                                                                                   |

---

## When to Use This

- ✅ Testing Stripe/PayPal webhooks locally
- ✅ Sharing dev site with clients
- ✅ Mobile testing on real devices
- ✅ Collaborating with remote teammates
- ✅ Demoing work-in-progress features

**Not ideal for:** Production traffic, streaming video, or real-time gaming.

---

## Links

- [Official Cloudflare Tunnel Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [cloudflared GitHub Repository](https://github.com/cloudflare/cloudflared)
