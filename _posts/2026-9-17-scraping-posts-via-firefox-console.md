---
layout: post
title: "Scraping Historical X (Twitter) Posts via Firefox Console"
date: 2026-09-17 11:59:00
description: How I recovered lost car review videos by scraping historical posts from X using nothing but the Firefox console and a bit of JavaScript — then cleaned and analysed the results with Go.
img: assets/img/x-scraping-cover.png
category: blog
tags: [scraping, javascript, firefox, go, data]
---

### The Motivation

There's a car reviewer I used to follow religiously. They didn't review high-end cars – just ordinary, affordable cars. The kind you'd actually consider buying. But what made their videos special was the level of detail: the walkarounds, the trim and engine breakdown, the honest takes on what it's like to live with a car day to day.

For me, they were the ultimate window-shopping companion. When I wanted to daydream about an ex-Japanese import — a Honda Jade, a Mitsubishi Delica, a Subaru forester SG5 — I'd go back to their reviews and imagine myself behind the wheel.

Then one day, those videos were gone. Deleted, unlisted, wiped from the channel. I wanted to know what else had disappeared. And I had a hunch: before each video release, this reviewer used to post teasers on X (Twitter). If I could find those old posts, I could piece together which videos had once existed.

The catch? Scrolling through years of tweets manually wasn't realistic. Third-party scraping tools wanted money, and paid APIs were off the table. So I opened the Firefox console and built my own scraper.

---

### Why X Search Is Trickier Than It Looks

Standard search queries like `youtube.com` often miss results on X because the platform rewrites every external link into its internal shortener: `t.co`. Searching for the raw domain returns almost nothing.

The fix is X's native filter flags. Here's the query that worked:

```text
from:carnversations filter:links until:2024-03-25 -filter:retweets
```

| Operator | Function | Description |
| --- | --- | --- |
| `from:USERNAME` | Author Filter | Scopes the search strictly to posts created by `@carnversations`. |
| `filter:links` | Media Filter | Matches posts containing any URL — including shortened `t.co` links. |
| `until:YYYY-MM-DD` | Date Upper Bound | Exclusive cutoff. `until:2024-03-25` includes posts up to **23:59:59 UTC on March 24, 2024**. |
| `-filter:retweets` | Exclusion | Excludes native retweets, returning only original tweets and direct replies. |

> **Crucial step:** After running the search, switch from the **Top** tab to the **Latest** tab. This presents tweets in strict reverse chronological order, letting the script scroll cleanly backward through time.

---

### Why Scraping X Is Hard

Modern single-page apps like X don't behave like static websites. Two challenges stand out:

- **DOM Recycling:** X unmounts off-screen DOM nodes as you scroll to keep browser memory in check. If you aren't capturing elements as they appear, they vanish.
- **Obfuscated CSS Classes:** Class names like `.r-18u37iz` are dynamically generated at build time and change frequently. Targeting them is a losing game.

**The solution:**

1. **Stable Selector Targets** — Target X's internal `data-testid` attributes, which stay consistent across deployments.
2. **Key-Based Deduplication** — Use each tweet's unique status URL as a key in a JavaScript `Map()`, so re-encountered nodes update rather than duplicate.
3. **Async Scroll & Render Loop** — Trigger window scrolling with `await` pauses so X's virtual DOM has time to fetch and render the next chunk.

---

### The Scraper Script

Open **Firefox Developer Tools** (`F12` or `Ctrl + Shift + K`), paste the script into the **Console** tab, and press Enter.

```javascript
/**
 * Dynamic DOM Scraper for X (Twitter) Search Results
 * Optimized for Firefox Developer Console
 */
(async () => {
  // 1. Data Structure Setup
  // Map keyed by tweet URL prevents duplicates as elements scroll in/out of DOM
  const scrapedData = new Map();

  // Execution Configuration
  const SCROLL_CYCLES = 50;       // Total number of scroll operations
  const SCROLL_DISTANCE = 1000;   // Vertical scroll distance per cycle (pixels)
  const PAUSE_DELAY_MS = 1500;    // Wait time for network fetch & DOM render

  console.log(`[+] Initializing scraper: ${SCROLL_CYCLES} cycles scheduled.`);

  // Utility helper for delaying execution in async workflow
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 2. DOM Parser Function
  function extractVisibleTweets() {
    // Select all currently mounted tweet article components
    const tweetElements = document.querySelectorAll('article[data-testid="tweet"]');

    tweetElements.forEach((tweetEl) => {
      // Locate time element (contains ISO timestamp string)
      const timeEl = tweetEl.querySelector('time');

      // Locate text wrapper container
      const textEl = tweetEl.querySelector('div[data-testid="tweetText"]');

      // Extract permalink from the anchor wrapping the time element
      const permalinkEl = timeEl ? timeEl.closest('a') : null;

      if (permalinkEl && permalinkEl.href) {
        const tweetUrl = permalinkEl.href;
        const isoDate = timeEl ? timeEl.getAttribute('datetime') : '';

        // Normalize text string by converting newlines to spaces
        const rawText = textEl ? textEl.innerText.replace(/\n/g, ' ') : '';

        // Extract internal links (t.co shorteners) contained within the post body
        const embeddedUrls = [];
        tweetEl.querySelectorAll('a[href*="t.co"]').forEach((anchor) => {
          if (anchor.href) embeddedUrls.push(anchor.href);
        });

        // Write or update entry in the Map
        scrapedData.set(tweetUrl, {
          timestamp: isoDate,
          url: tweetUrl,
          text: rawText,
          links: embeddedUrls.join(', ')
        });
      }
    });
  }

  // 3. Main Scraping Loop
  for (let cycle = 1; cycle <= SCROLL_CYCLES; cycle++) {
    // Parse visible elements before scrolling
    extractVisibleTweets();

    // Scroll browser window down
    window.scrollBy(0, SCROLL_DISTANCE);

    // Logging checkpoint every 10 iterations
    if (cycle % 10 === 0 || cycle === SCROLL_CYCLES) {
      console.log(`[+] Cycle ${cycle}/${SCROLL_CYCLES}: ${scrapedData.size} unique posts recorded.`);
    }

    // Pause execution to allow DOM hydration
    await sleep(PAUSE_DELAY_MS);
  }

  // 4. Data Formatting and Export
  const dataset = Array.from(scrapedData.values());
  console.log(`[✔] Extraction complete. Total items: ${dataset.length}`);

  // Create an in-memory JSON file and trigger browser download
  const jsonBlob = new Blob([JSON.stringify(dataset, null, 2)], { type: 'application/json' });
  const downloadLink = document.createElement('a');

  downloadLink.href = URL.createObjectURL(jsonBlob);
  downloadLink.download = `x_scraped_tweets_${Date.now()}.json`;

  // Programmatically click link to download
  downloadLink.click();

  // Clean up object URL memory reference
  URL.revokeObjectURL(downloadLink.href);
})();
```

---

### Output Schema

The scraper exports a JSON array of objects:

```json
[
  {
    "timestamp": "2022-08-15T14:30:00.000Z",
    "url": "https://x.com/carnversations/status/1559187364123456789",
    "text": "The 0-100 on the Honda jade RS was such a thrilling experience... https://t.co/example",
    "links": "https://t.co/example"
  }
]
```

Each entry captures the timestamp, permalink, cleaned post text, and any embedded links.

---

### Cleaning the Data with Go

Raw scraped text is messy — links are often broken up by spaces, and there's a lot of noise mixed in. I wrote a small Go program to extract only the **YouTube links** from each tweet and produce a clean, focused dataset.

```go
package main

import (
	"encoding/json"
	"fmt"
	"os"
	"regexp"
	"strings"
)

// RawItem represents the structure of the input JSON
type RawItem struct {
	Date     string `json:"date"`
	TweetURL string `json:"tweet_url"`
	Text     string `json:"text"`
	Links    string `json:"links"`
}

// CleanItem represents the desired cleaned output schema
type CleanItem struct {
	Date        string `json:"date"`
	VideoLink   string `json:"video_link"`
	Description string `json:"description"`
}

func main() {
	// 1. Read raw JSON file
	fileData, err := os.ReadFile("raw_tweets.json")
	if err != nil {
		fmt.Printf("Error reading input file: %v\n", err)
		return
	}

	var rawItems []RawItem
	if err := json.Unmarshal(fileData, &rawItems); err != nil {
		fmt.Printf("Error unmarshaling JSON: %v\n", err)
		return
	}

	// 2. Compile Regex to catch YouTube links (including those with spaces)
	ytRegex := regexp.MustCompile(`(?i)https?://\s*(?:www\.)?(?:youtube\.com/[^\s]+|youtu\.be/[^\s]+)`)
	spaceRegex := regexp.MustCompile(`\s+`)

	var cleanedData []CleanItem

	// 3. Process items
	for _, item := range rawItems {
		match := ytRegex.FindString(item.Text)
		if match != "" {
			// Remove spaces inside the matched URL
			videoLink := strings.ReplaceAll(match, " ", "")

			// Clean description by removing the URL and collapsing extra whitespace
			description := ytRegex.ReplaceAllString(item.Text, "")
			description = strings.TrimSpace(spaceRegex.ReplaceAllString(description, " "))

			cleanedData = append(cleanedData, CleanItem{
				Date:        item.Date,
				VideoLink:   videoLink,
				Description: description,
			})
		}
	}

	// 4. Export cleaned JSON
	outputJSON, err := json.MarshalIndent(cleanedData, "", "  ")
	if err != nil {
		fmt.Printf("Error marshaling output JSON: %v\n", err)
		return
	}

	if err := os.WriteFile("cleaned_videos.json", outputJSON, 0644); err != nil {
		fmt.Printf("Error writing file: %v\n", err)
		return
	}

	fmt.Printf("Success! Extracted %d valid YouTube videos.\n", len(cleanedData))
}
```

This pulls out the YouTube link from each tweet, strips the URL from the description, and outputs a tidy `cleaned_videos.json`:

```json
[
  {
    "date": "2022-08-15T14:30:00.000Z",
    "video_link": "https://youtu.be/example",
    "description": "The 0-100 on the Honda jade RS was such a thrilling experience..."
  }
]
```

---

### Exploring the Dataset with Go

Once the data was clean, I ran a quick exploratory analysis in Go: date range, word counts, and the most common keywords across all descriptions. It gave me a sense of what kinds of cars and themes showed up most often.

```go
/*
eda_analysis.go
Perform dataset exploration and word count analysis on parsed video metadata.
*/

package main

import (
	"encoding/json"
	"fmt"
	"os"
	"regexp"
	"sort"
	"strings"
	"time"
)

type VideoRecord struct {
	Date        string `json:"date"`
	VideoLink   string `json:"video_link"`
	Description string `json:"description"`
}

type WordCount struct {
	Word  string
	Count int
}

func main() {
	// 1. Read Cleaned JSON
	fileData, err := os.ReadFile("cleaned_videos.json")
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		return
	}

	var records []VideoRecord
	if err := json.Unmarshal(fileData, &records); err != nil {
		fmt.Printf("Error unmarshaling JSON: %v\n", err)
		return
	}

	if len(records) == 0 {
		fmt.Println("No records to process.")
		return
	}

	// 2. Variables for Stats
	var totalWords int
	minWords, maxWords := 1<<31-1, 0
	var minTime, maxTime time.Time
	wordMap := make(map[string]int)
	wordRegex := regexp.MustCompile(`\b\w+\b`)
	stopWords := map[string]bool{"the": true, "a": true, "to": true, "and": true, "of": true, "in": true, "is": true, "on": true, "for": true, "this": true}

	// 3. Iterative Analysis
	for i, r := range records {
		t, _ := time.Parse(time.RFC3339, r.Date)
		if i == 0 || t.Before(minTime) {
			minTime = t
		}
		if i == 0 || t.After(maxTime) {
			maxTime = t
		}

		// Text Stats
		words := wordRegex.FindAllString(strings.ToLower(r.Description), -1)
		wc := len(words)
		totalWords += wc

		if wc < minWords {
			minWords = wc
		}
		if wc > maxWords {
			maxWords = wc
		}

		// Track keywords
		for _, w := range words {
			if !stopWords[w] && len(w) > 2 {
				wordMap[w]++
			}
		}
	}

	// 4. Sort Top Keywords
	var wordCounts []WordCount
	for k, v := range wordMap {
		wordCounts = append(wordCounts, WordCount{Word: k, Count: v})
	}
	sort.Slice(wordCounts, func(i, j int) bool {
		return wordCounts[i].Count > wordCounts[j].Count
	})

	// 5. Print Results
	fmt.Println("================ EDA SUMMARY REPORT ================")
	fmt.Printf("Total Videos Analyzed : %d\n", len(records))
	fmt.Printf("Date Range           : %s to %s\n", minTime.Format("2006-01-02"), maxTime.Format("2006-01-02"))
	fmt.Println("\n--- Description Text Metrics ---")
	fmt.Printf("Avg Word Count       : %.2f words\n", float64(totalWords)/float64(len(records)))
	fmt.Printf("Max Word Count       : %d words\n", maxWords)
	fmt.Printf("Min Word Count       : %d words\n", minWords)
	fmt.Println("\n--- Top Keywords / Themes ---")
	for i := 0; i < 5 && i < len(wordCounts); i++ {
		fmt.Printf(" - %s: %d occurrences\n", wordCounts[i].Word, wordCounts[i].Count)
	}
	fmt.Println("====================================================")
}
```

A sample run looked something like this:

```
================ EDA SUMMARY REPORT ================
Total Videos Analyzed : 87
Date Range           : 2019-04-12 to 2024-03-24

--- Description Text Metrics ---
Avg Word Count       : 42.31 words
Max Word Count       : 118 words
Min Word Count       : 9 words

--- Top Keywords / Themes ---
 - honda: 23 occurrences
 - toyota: 19 occurrences
 - review: 17 occurrences
 - jade: 11 occurrences
 - fielder: 8 occurrences
====================================================
```

It was a neat little confirmation: the reviewer really did focus on the everyday, affordable Japanese imports I remembered — and now I had a paper trail of everything they'd once covered.

---

### What I Found

Running this against the reviewer's timeline surfaced a long trail of teaser posts — release announcements, behind-the-scenes clips, and direct links to videos that no longer exist on their channel. Some had been replaced by re-uploads; others had vanished entirely. The scrape gave me the receipts: a documented record of what had once been published, and a clear view of what was quietly removed.

It's a small win, but it scratches an itch every car enthusiast knows: when the reviews you used to window-shop with disappear, you want to know *what* disappeared — and now I do.