"use client";

import Layout from "@/src/Layout";
import { MDXProvider } from "@mdx-js/react";
import Iam from "@/src/content/iam.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <Iam />
      </MDXProvider>
    </Layout>
  );
}
