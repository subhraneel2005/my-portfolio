"use client"

import { useState } from "react"
import { Copy, Check, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function MarkdownActions({ content, filename = "content.md" }: { content: string, filename?: string }) {
    const [copied, setCopied] = useState(false)

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const downloadMarkdown = () => {
        const blob = new Blob([content], { type: "text/markdown" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <ButtonGroup>
            <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="gap-2"
            >
                <div className="relative w-4 h-4">
                    <Copy
                        className={`h-4 w-4 absolute transition-all duration-200 ${copied
                            ? "opacity-0 scale-0 rotate-180"
                            : "opacity-100 scale-100 rotate-0"
                            }`}
                    />
                    <Check
                        className={`h-4 w-4 absolute transition-all duration-200 ${copied
                            ? "opacity-100 scale-100 rotate-0"
                            : "opacity-0 scale-0 -rotate-180"
                            }`}
                    />
                </div>
                <span className="transition-all duration-200">
                    {copied ? "copied!" : "copy markdown"}
                </span>
            </Button>

            <Button
                variant="outline"
                size="sm"
                onClick={downloadMarkdown}
                className="gap-2"
            >
                <Download className="h-4 w-4" />
                download
            </Button>
        </ButtonGroup>
    )
}