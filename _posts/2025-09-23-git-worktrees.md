---
layout: post
title: Testing Pull Requests Locally with Git Worktrees
date: 2025-09-23 10:00:00
description: A step-by-step guide to using Git worktrees for PR testing.
tags: git worktree pull-requests
categories: technology, development
giscus_comments: true
tabs: true
---

# Testing Pull Requests Locally with Git Worktrees

## Introduction

When reviewing pull requests (PRs), it's often necessary to run the code locally before approving changes. Instead of **old-school** branch switching, **Git worktrees** let you check out a PR into its own directory without touching your current working branch. This, in theory, makes testing PRs a whole lot easier, with the added benefit of a clean main workspace.

**Benefits:**

- **No branch juggling** – Avoid `git stash` / branch-switching headaches.
- **Lightweight** – Multiple working directories share the same Git history.
- **Great for PR reviews** – Spin up isolated environments for each PR.

### Setup

Using `git worktrees` can seem **intimidating** at first, but once you get the hang of it, you'll appreciate its benefits. That said, I've created a one-time setup guide that you can reuse for your projects for those who want to dive right in. We'll use aliases to simplify the setup and make it user-friendly.

Run this in your terminal:

```bash
git config --global alias.pr '!f() { \
  num=$1; \
  branch="pr-$num"; \
  dir="../pr-$num"; \
  git fetch upstream pull/$num/head:$branch && \
  git worktree add $dir $branch && \
  echo "✅ Worktree for PR #$num created at $dir"; \
}; f'
```

---

## 🔹 Usage

Whenever you want to review PR **\#69**:

```bash
git pr 69
```

This command will:

1.  Fetch the PR branch from **upstream**.

<!-- end list -->

```bash
git fetch upstream pull/69/head:pr-69
```

2.  Create a new worktree at `../pr-69`.

<!-- end list -->

```bash
git worktree add ../pr-69 pr-69
```

3.  Print a confirmation message.

Then you can:

```bash
cd ../pr-69
```

...and test/run/review the code safely in isolation.

---

## 🔹 Cleanup After Review

When you're done with the PR:

```bash
cd ..
git worktree remove ../pr-69
git branch -D pr-69   # removes the temporary branch
```
