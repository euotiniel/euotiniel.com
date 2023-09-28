"use client";

import Layout from "@/src/Layout";
import { MDXProvider } from "@mdx-js/react";
import GuestBook from "@/src/content/gestbook.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <GuestBook />
      </MDXProvider>
    </Layout>
  );
}
