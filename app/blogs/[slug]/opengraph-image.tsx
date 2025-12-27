import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let title = "Blog Post";
  let excerpt = "";

  try {
    const docsDirectory = join(process.cwd(), "components/docs");
    const fullPath = join(docsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    // Extract title from first heading if no frontmatter title
    const titleMatch = content.match(/^#\s+(.+)$/m);
    title = data.title || titleMatch?.[1] || slug;

    // Extract excerpt (first paragraph, cleaned up)
    const cleanedContent = content
      .replace(/^#+\s+/gm, "")
      .replace(/\n+/g, " ")
      .trim();
    excerpt = data.excerpt || cleanedContent.substring(0, 120) || "";
  } catch (error) {
    // If file doesn't exist, use defaults
    console.error(`Error reading blog post ${slug}:`, error);
  }

  if (!title || title === "Blog Post") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 80,
            backgroundColor: "#0a0a0a",
            color: "#ffffff",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 32,
              opacity: 0.6,
              marginBottom: 24,
            }}
          >
            subhraneel
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            Blog Post Not Found
          </div>
        </div>
      ),
      size
    );
  }

  // Truncate title if too long
  const truncatedTitle =
    title.length > 60 ? title.substring(0, 57) + "..." : title;

  // Truncate excerpt if needed
  const truncatedExcerpt =
    excerpt.length > 120 ? excerpt.substring(0, 117) + "..." : excerpt;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            opacity: 0.6,
            marginBottom: 40,
          }}
        >
          subhraneel/blogs
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            {truncatedTitle}
          </div>

          {/* Excerpt */}
          {truncatedExcerpt && (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                opacity: 0.7,
                lineHeight: 1.4,
              }}
            >
              {truncatedExcerpt}
            </div>
          )}
        </div>
      </div>
    ),
    size
  );
}
