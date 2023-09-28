"use client";

import Layout from "@/src/Layout";
import { MDXProvider } from "@mdx-js/react";
import Blog from "@/src/content/blog.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <Blog />
      </MDXProvider>
    </Layout>
  );
}
