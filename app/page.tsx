"use client";

import { MDXProvider } from "@mdx-js/react";
import Iam from "@/src/content/iam.mdx";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <Container>
      <head>
        <title>Otoniel Emanuel</title>
      </head>
      <Header />
      <div className="my-10">
        <MDXProvider components={{}}>
          <Iam />
        </MDXProvider>
      </div>
      <Footer />
    </Container>
  );
}
