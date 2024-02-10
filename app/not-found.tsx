"use client";

import Layout from "@/src/layout/index";
import { MDXProvider } from "@mdx-js/react";
import NotFound from "@/src/content/404.mdx";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <Container>
      <Header />
      <div className="my-12">
        <MDXProvider components={{}}>
          <NotFound />
        </MDXProvider>
      </div>
      <Footer />
    </Container>
  );
}
