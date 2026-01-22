// lib/fetch-og.ts
import { cache } from "react"

export type OpenGraphData = {
  title?: string
  description?: string
  image?: string
  siteName?: string
  url: string
}

export const fetchOpenGraph = cache(async (url: string): Promise<OpenGraphData> => {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Twitterbot/1.0",
    },
    next: { revalidate: 60 * 60 * 24 }, // 24h cache
  })

  const html = await res.text()

  const get = (property: string) => {
    const match = html.match(
      new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`, "i")
    )
    return match?.[1]
  }

  return {
    url,
    title: get("og:title"),
    description: get("og:description"),
    image: get("og:image"),
    siteName: get("og:site_name"),
  }
})
