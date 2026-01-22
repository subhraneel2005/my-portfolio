// components/mdx-renderer.tsx
"use client";

import { getMDXComponent } from "next-contentlayer2/hooks";
import { components } from "@/components/docs/mdx-components";
import { useMemo } from "react";


export default function MDXRenderer({ code }: { code: string }) {
    const Content = useMemo(() => getMDXComponent(code), [code]);
    return <Content components={components} />;
}
