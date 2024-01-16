"use client";

import Layout from "@/src/layout";
import { MDXProvider } from "@mdx-js/react";
import NotFound from "@/src/content/404.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <NotFound />
      </MDXProvider>
    </Layout>
  );
}
