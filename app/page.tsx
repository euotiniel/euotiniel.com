"use client";

import { MDXProvider } from "@mdx-js/react";
import Iam from "@/src/content/iam.mdx";

export default function page() {
  return (
    
      <>
      <MDXProvider components={{}}>
        <Iam />
      </MDXProvider>
      </>
  );
}
