"use client";

import { MDXProvider } from "@mdx-js/react";
import SecretBook from "@/src/content/secretbook.mdx";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <Container>
      <head>
        <title>Otoniel Emanuel - SecretBook</title>
      </head>
      <Header />
      <div className="my-10">
        <MDXProvider components={{}}>
          <SecretBook />
        </MDXProvider>
      </div>
      <Footer />
    </Container>
  );
}
