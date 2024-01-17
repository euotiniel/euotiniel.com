"use client";

import Layout from "@/src/layout/index";
import { MDXProvider } from "@mdx-js/react";
import SecretBook from "@/src/content/secretbook.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <SecretBook />
      </MDXProvider>
    </Layout>
  );
}
