#!/usr/bin/env node
/**
 * イベントURLからOGP画像URLを取得して events.json を更新するスクリプト
 * 使い方: node scripts/fetch-og-images.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const eventsPath = join(__dirname, "../data/events.json");

async function fetchOgImage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const html = await res.text();

    // og:image を探す
    const match =
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

    return match ? match[1] : null;
  } catch (e) {
    console.warn(`  ⚠️  Failed to fetch ${url}: ${e.message}`);
    return null;
  }
}

async function main() {
  const events = JSON.parse(readFileSync(eventsPath, "utf-8"));
  let updated = 0;

  for (const event of events) {
    if (event.ogImage) {
      console.log(`  ✅ ${event.eventName}: already has ogImage, skipping`);
      continue;
    }
    process.stdout.write(`  🔍 ${event.eventName}... `);
    const ogImage = await fetchOgImage(event.url);
    if (ogImage) {
      event.ogImage = ogImage;
      updated++;
      console.log(`✅`);
    } else {
      console.log(`❌ (no og:image found)`);
    }
  }

  writeFileSync(eventsPath, JSON.stringify(events, null, 2) + "\n");
  console.log(`\n✨ Done! Updated ${updated} events.`);
}

main();
