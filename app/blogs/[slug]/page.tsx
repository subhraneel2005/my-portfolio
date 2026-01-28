import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
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
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
      <div className="mb-8 flex w-full flex-col items-start justify-start gap-y-4 md:mb-10 md:flex-row md:gap-y-0 md:space-x-4">
        <Link href="/blogs">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            back
          </Button>
        </Link>

        <MarkdownActions
          content={post.body.raw}
          filename={`${post.title.toLowerCase().replace(/\s+/g, "-")}.md`}
        />
      </div>

      <article className="prose prose-neutral max-w-none dark:prose-invert">
        {post.cover && (
          <div className="relative mb-8 h-[220px] w-full overflow-hidden rounded-2xl border border-border/80 md:h-[360px]">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <Badge variant="secondary" className="mb-8">
          {post.date && (
            <time className="flex items-center justify-center gap-1 text-xs text-muted-foreground sm:text-sm">
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
      <div className="mx-auto max-w-prose">
        <Comments />
      </div>
    </div>
  );
}
