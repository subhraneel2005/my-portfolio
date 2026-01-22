/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { cn } from "@/lib/utils";
import { Callout } from "./callout";
import { MdxCard } from "./mdx-card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import TwitterCard from "../twitter-card";
import MDXAvatar from "./mdx-avatar";
import Link from "next/link";

export const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight", // Responsive font size
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-2xl md:text-3xl font-semibold tracking-tight first:mt-0", // Responsive font size
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        className={cn(
          "font-medium underline underline-offset-4 inline-flex items-center gap-1 break-words", // break-words for long URLs
          className
        )}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        <span className="shrink">{children}</span>
        {isExternal && (
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
        )}
      </a>
    );
  },

  p: ({ className, ...props }) => (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 break-words",
        className
      )} // Added break-words
      {...props}
    />
  ),

  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-4 md:ml-6 list-disc", className)} {...props} /> // Reduced margin on mobile
  ),

  ol: ({ className, ...props }) => (
    <ol
      className={cn("my-6 ml-4 md:ml-6 list-decimal", className)}
      {...props}
    /> // Reduced margin on mobile
  ),

  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="my-6 flex justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={cn("rounded-md border max-w-full h-auto", className)}
        alt={alt}
        {...props}
      />
    </div>
  ),

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-md border">
      {" "}
      {/* Added border and horizontal scroll */}
      <table
        className={cn("w-full text-sm md:text-base", className)}
        {...props}
      />
    </div>
  ),

  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black p-3 md:p-4 text-sm md:text-base", // Responsive padding and text
        className
      )}
      {...props}
    />
  ),

  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] md:text-sm break-all md:break-normal", // break-all prevents inline code from stretching mobile
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
  TwitterCard,
  Avatar: MDXAvatar,
  Link
};
