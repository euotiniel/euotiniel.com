"use client";

import Layout from "@/src/Layout";
import { MDXProvider } from "@mdx-js/react";
import Projects from "@/src/content/projects.mdx";

export default function page() {
  return (
    <Layout>
      <MDXProvider components={{}}>
        <Projects />
      </MDXProvider>
    </Layout>
  );
}
