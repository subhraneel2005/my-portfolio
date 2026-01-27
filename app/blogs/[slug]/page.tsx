import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { components } from "@/components/docs/mdx-components";
import { getMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Comments from "@/components/comments";
import MDXRenderer from "@/components/docs/mdx-renderer";
import { MarkdownActions } from "@/components/docs/markdown-actions";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "blog not found",
    };
  }

  const excerpt =
    post.excerpt ||
    post.body.raw
      .replace(/^#+\s+/gm, "")
      .replace(/\n+/g, " ")
      .slice(0, 160);

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: post.title,
      description: excerpt,
      images: post.cover ? [{ url: post.cover }] : [],
    },
    twitter: {
      card: "summary_large_image",
      images: post.cover ? [post.cover] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-3 pt-18 md:pt-28 pb-16 w-full">
      <div className="w-full flex flex-col md:flex-row items-start justify-start mb-10 gap-y-4 md:gap-y-0 md:space-x-4">

        <Link href="/blogs">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            back
          </Button>
        </Link>

        <MarkdownActions content={post.body.raw} filename={`${post.title.toLowerCase().replace(/\s+/g, '-')}.md`} />
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        {post.cover && (
          <div className="relative w-full h-[200px] md:h-[350px] overflow-hidden mb-8">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <Badge variant={"secondary"} className="mb-8">
          {post.date && (
            <time className="flex justify-center items-center gap-1 text-muted-foreground">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString()}
            </time>
          )}
        </Badge>

        <MDXRenderer code={post.body.code} />
      </article>

      <hr className="my-4 border-muted" />

      {/* Change: Wrap Comments in the exact same width as your article 
        so they line up perfectly.
    */}
      <div className="max-w-prose mx-auto">
        <Comments />
      </div>
    </div>
  );
}
