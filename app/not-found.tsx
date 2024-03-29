"use client";

import { MDXProvider } from "@mdx-js/react";
import NotFound from "@/src/content/404.mdx";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <Container>
      <head>
        <title>404 - Página não encontrada</title>
      </head>
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
