"use client"

import { type LucideIcon } from "lucide-react"

type MDXIconProps = {
    icon: LucideIcon
    className?: string
}

export default function MDXIcon({ icon: Icon, className }: MDXIconProps) {
    return <Icon className={className} />
}
