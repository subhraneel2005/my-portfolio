import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar } from "lucide-react";
import { allBlogs } from "contentlayer/generated";
import { Badge } from "@/components/ui/badge";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogListPage() {
  const blogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
      <Link href="/" className="mb-10 inline-block -ml-2 sm:mb-12">
        <Button variant="outline" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          back
        </Button>
      </Link>

      <header className="mb-10 space-y-3 sm:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          writing
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          sometimes i do write
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          small logs about what i&apos;m learning, building, and trying to get
          better at.
        </p>
      </header>

      <div className="space-y-8 sm:space-y-10">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block"
          >
            <Card className="group border-border/80 bg-card/80 transition-all hover:-translate-y-0.5 hover:bg-accent/40">
              <CardHeader className="space-y-4">
                {post.cover && (
                  <div className="relative h-52 w-full overflow-hidden rounded-xl border border-border/70 sm:h-60">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <CardTitle className="text-xl tracking-tight sm:text-2xl">
                  {post.title}
                </CardTitle>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-3 sm:text-sm">
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </Badge>

                  {post.tags?.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              {post.excerpt && (
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
