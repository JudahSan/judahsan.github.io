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

Using `Git worktrees` can seem **intimidating** at first, but once you get the hang of it, you'll appreciate its benefits. That said, I've created a one-time setup guide that you can reuse for your projects for those who want to dive right in. We'll use aliases to simplify the setup and make it user-friendly.

Run this in your terminal:

```bash
git config --global alias.pr '!f() {
  num="$1";
  if [ -z "$num" ]; then
    echo "Usage: git pr <pull-request-number>";
    return 1;
  fi;

  branch="pr-$num";
  dir="../pr-$num";
  remote=$(git remote | grep -qx "upstream" && echo "upstream" || echo "origin");

  echo "Fetching PR #$num from remote '\''$remote'\''...";

  git fetch "$remote" "pull/$num/head:refs/heads/$branch" &&
  git worktree add "$dir" "$branch" &&
  echo "Worktree for PR #$num created at $dir";
}; f'
```

### Prerequisites:
- Git installed and a local clone of the repository. 
- An upstream or origin remote pointing to the GitHub repository containing the PR. 
- Access to the pull request.

The alias automatically prefers upstream when available, falling back to origin otherwise. It fetches the PR into a local branch named pr-<number> and creates a worktree in a sibling directory.

---

## 🔹 Usage

Whenever you want to review PR **\#69**:

```bash
git pr 69
```

This command will:

1.  **Fetch the pull request** from the configured remote (`upstream` if available, otherwise `origin`).

<!-- end list -->

```bash
git fetch <remote> pull/69/head:refs/heads/pr-69
```

2.  Create a new worktree at `../pr-69`.

<!-- end list -->

```bash
git worktree add ../pr-69 pr-69
```

3.  Print a confirmation message. 
    - This keeps the instructions consistent with the alias and avoids implying that every repository uses `upstream`.

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

You can verify your remaining worktrees with:

```bash
git worktree list
```