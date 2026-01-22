"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type MDXAvatarProps = {
    src: string
    alt: string
    fallback: string
    className?: string
}

export default function MDXAvatar({
    src,
    alt,
    fallback,
    className,
}: MDXAvatarProps) {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    )
}
