"use client";

import { MDXProvider } from "@mdx-js/react";
import SecretBook from "@/src/content/secretbook.mdx";

export default function page() {
  return (
      <>
        <MDXProvider components={{}}>
        <SecretBook />
      </MDXProvider>
      </>
  );
}
