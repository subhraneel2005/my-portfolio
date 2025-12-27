import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
}

const docsDirectory = join(process.cwd(), "components/docs");

// Convert bare URLs to markdown links
function preprocessMarkdown(content: string): string {
  // Split by lines to handle URLs on separate lines
  const lines = content.split("\n");
  const processedLines = lines.map((line, index) => {
    const trimmedLine = line.trim();
    
    // Skip if line is already a markdown link or contains markdown link syntax
    if (trimmedLine.includes("](") || trimmedLine.includes("<") || trimmedLine.startsWith("[")) {
      return line;
    }
    
    // Check if the entire line is a URL
    const urlPattern = /^https?:\/\/[^\s\)]+$/;
    if (urlPattern.test(trimmedLine)) {
      return line.replace(trimmedLine, `[${trimmedLine}](${trimmedLine})`);
    }
    
    // Match URLs that are not already in markdown link format
    // Handle inline URLs
    const urlRegex = /(^|\s)(https?:\/\/[^\s\)]+)/g;
    return line.replace(urlRegex, (match, prefix, url) => {
      // Check if it's already a markdown link
      if (match.includes("](") || match.includes("<")) {
        return match;
      }
      return `${prefix}[${url}](${url})`;
    });
  });
  
  return processedLines.join("\n");
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = readdirSync(docsDirectory);
    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const fullPath = join(docsDirectory, file);
        const fileContents = readFileSync(fullPath, "utf-8");

        // Try to parse frontmatter, fallback to using first heading as title
        const { data, content } = matter(fileContents);
        const processedContent = preprocessMarkdown(content);

        // Extract title from first heading if no frontmatter title
        const titleMatch = processedContent.match(/^#\s+(.+)$/m);
        const title = data.title || titleMatch?.[1] || slug;

        // Extract excerpt (first paragraph or first 150 chars)
        const excerptMatch = processedContent.match(/^[^\n#]+/m);
        const excerpt = data.excerpt || excerptMatch?.[0]?.slice(0, 150) || "";

        return {
          slug,
          title,
          content: processedContent,
          excerpt: excerpt.trim(),
        };
      });

    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(docsDirectory, `${slug}.md`);
    const fileContents = readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);
    const processedContent = preprocessMarkdown(content);

    const titleMatch = processedContent.match(/^#\s+(.+)$/m);
    const title = data.title || titleMatch?.[1] || slug;

    return {
      slug,
      title,
      content: processedContent,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
