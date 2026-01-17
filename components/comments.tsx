"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mx-auto max-w-prose mt-2 w-full">
      <Giscus
        id="comments"
        repo="subhraneel2005/my-portfolio"
        repoId="R_kgDOO9S1TQ"
        category="General"
        categoryId="DIC_kwDOO9S1Tc4C1Cfy"
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
