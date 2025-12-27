import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const excerpt =
    post.excerpt ||
    post.content
      .replace(/^#+\s+/gm, "")
      .replace(/\n+/g, " ")
      .trim()
      .substring(0, 160);

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: post.title,
      description: excerpt,
      type: "article",
      url: `/blogs/${slug}`,
      images: [
        {
          url: `/blogs/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
      images: [`/blogs/${slug}/opengraph-image`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
        {/* Back Button */}
        <Link href="/blogs">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 sm:mb-8 lg:mb-12 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            back
          </Button>
        </Link>

        {/* Blog Content */}
        <article className="space-y-6 sm:space-y-8 overflow-x-hidden">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 mt-8 sm:mt-12 first:mt-0 text-foreground break-words">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mb-4 sm:mb-6 mt-8 sm:mt-10 text-foreground break-words">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mb-3 sm:mb-4 mt-6 sm:mt-8 text-foreground break-words">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-muted-foreground break-words overflow-wrap-anywhere">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc space-y-2 sm:space-y-3 mb-4 sm:mb-6 ml-4 sm:ml-6 text-muted-foreground [&_ul]:mt-2 [&_ul]:ml-4 [&_ul]:list-disc break-words">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-2 sm:space-y-3 mb-4 sm:mb-6 ml-4 sm:ml-6 text-muted-foreground [&_ol]:mt-2 [&_ol]:ml-4 [&_ol]:list-decimal break-words">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-base sm:text-lg leading-relaxed pl-1 [&_p]:inline [&_p]:m-0 break-words overflow-wrap-anywhere">
                  {children}
                </li>
              ),
              a: ({ href, children }) => {
                if (!href) return <span>{children}</span>;

                // Regular link
                return (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors break-all"
                  >
                    {children}
                  </a>
                );
              },
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground break-words">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-foreground break-words">
                  {children}
                </em>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-foreground break-all">
                  {children}
                </code>
              ),
              hr: () => <Separator className="my-6 sm:my-8" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
