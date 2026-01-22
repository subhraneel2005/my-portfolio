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
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        <Link href="/">
          <Button variant="outline" size="sm" className="mb-12 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            back
          </Button>
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold tracking-[-1.5px] mb-12">
          sometimes i do write
        </h1>

        <div className="space-y-6">
          {blogs.map((post) => (
            <Link className="mt-4" key={post.slug} href={`/blogs/${post.slug}`}>
              <Card className="group hover:bg-accent/50 transition-colors max-w-lg">
                <CardHeader>
                  {post.cover && (
                    <div className="relative w-full h-64">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  )}
                  <CardTitle className="text-2xl tracking-[-1.1px]">
                    {post.title}
                  </CardTitle>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <Badge variant={"outline"}>
                      <Calendar />
                      {formatDate(post.date)}
                    </Badge>

                    {post.tags?.map((tag) => (
                      <Badge variant={"secondary"} key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                {post.excerpt && (
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
