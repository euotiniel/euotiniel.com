"use client";

import { MDXProvider } from '@mdx-js/react';
import Iam from '@/src/copys/iam.mdx'
import Container from "@/src/components/Container";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import Link from "next/link";
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <Container>
      <header className="flex flex-row items-center justify-between">
      <div className="flex gap-4 items-center my-5">
      <Avatar>
        <AvatarImage src="https://github.com/euotiniel.png" />
        <AvatarFallback>OE</AvatarFallback>
      </Avatar>

      <span className="scroll-m-20 text-lg font-extrabold tracking-tight lg:text-lg">
      I&apos;am Oto
    </span>
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-5">
          <li><Link href="">Blog</Link></li>
          <li><Link href="">Projectos</Link></li>
          <li><Link href="">GuestBook</Link></li>
          <li><Link href="">Galeria</Link></li>
        </ul>
      </nav>
      </header>
    <div className="my-12">
    <MDXProvider components={{}}>
        <Iam />
      </MDXProvider>
    </div>
    <Footer />
    </Container>
  );
}
