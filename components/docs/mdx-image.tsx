// components/mdx-image.tsx
"use client"

import Image, { type ImageProps } from "next/image"

type MDXImageProps = ImageProps & {
    className?: string
}

export function MDXImage({ className, ...props }: MDXImageProps) {
    return (
        <Image
            {...props}
            alt="some-name"
            className={["rounded-lg my-6", className].filter(Boolean).join(" ")}
        />
    )
}
