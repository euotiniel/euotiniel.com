"use client";

import { MDXProvider } from "@mdx-js/react";
import Projects from "@/src/content/projects.mdx";

export default function page() {
  return (
     <>
       <MDXProvider components={{}}>
        <Projects />
      </MDXProvider>
     </>
  );
}
