"use client";

import Layout from "@/src/Layout";
import { MDXProvider } from "@mdx-js/react";
import Gallery from "@/src/content/gallery.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <Gallery />
      </MDXProvider>
    </Layout>
  );
}
