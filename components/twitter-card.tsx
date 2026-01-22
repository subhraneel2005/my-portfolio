// components/twitter-card.tsx
import Image from "next/image"
import { fetchOpenGraph } from "@/lib/fetch-og"

export default async function TwitterCard({ url }: { url: string }) {
    const og = await fetchOpenGraph(url)

    if (!og.title) return null

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block my-6 overflow-hidden rounded-xl border hover:bg-muted transition"
        >
            {og.image && (
                <div className="relative aspect-[16/9] w-full">
                    <Image src={og.image} alt={og.title} fill className="object-cover" />
                </div>
            )}

            <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">
                    {og.siteName ?? new URL(url).hostname}
                </p>
                <h3 className="font-semibold leading-snug line-clamp-2">
                    {og.title}
                </h3>
                {og.description && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {og.description}
                    </p>
                )}
            </div>
        </a>
    )
}
