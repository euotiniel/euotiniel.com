"use client";

import { MDXProvider } from "@mdx-js/react";
import Projects from "@/src/content/projects.mdx";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <Container>
      <head>
        <title>Otoniel Emanuel - Projectos</title>
      </head>
      <Header />
      <div className="my-10">
        <MDXProvider components={{}}>
          <Projects />
        </MDXProvider>
      </div>
      <Footer />
    </Container>
  );
}
