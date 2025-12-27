import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export default function BlogListPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12 lg:pb-16">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-8 sm:mb-12 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            back
          </Button>
        </Link>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-1.5px] mb-8 sm:mb-12 text-foreground">
          sometimes i do write
        </h1>

        {/* Blog Posts List */}
        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl tracking-[-1.1px]">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  {post.excerpt && (
                    <CardContent>
                      <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
