"use client";

import { MDXProvider } from "@mdx-js/react";
import NotFound from "@/src/content/404.mdx";

export default function page() {
  return (
      <>
        <MDXProvider components={{}}>
        <NotFound />
      </MDXProvider>
      </>
  );
}
