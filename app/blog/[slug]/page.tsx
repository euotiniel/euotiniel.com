import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/src/components/Container";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/rounded-avatar";
import { BsArrowBarLeft } from "react-icons/bs";

import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/src/components/Footer";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content/articles"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("src/content/articles", slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <Container>
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/blog/"
          className="text-muted-foreground leading-6 tracking-normal"
        >
          <BsArrowBarLeft size="20" />
        </Link>
        <div></div>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <small className="text-sm text-gray-400">{props.fontMatter.date}</small>
        <h2 className="mt-1 md:mt-2 scroll-m-20 pb-1 text-2xl md:text-3xl font-extrabold tracking-tight transition-colors first:mt-0">
          {props.fontMatter.title}
        </h2>
        <p className="text-base text-muted-foreground leading-6 tracking-normal md:text-base font-semibold md:text-[14px] mt-2 md:mt-3">
          {props.fontMatter.description}
        </p>
        <div className="mt-2 md:mt-4">
          <Link
            href="https://github.com/euotiniel"
            className="flex flex-row gap-2 items-center justify-center"
          >
            <Avatar>
              <AvatarImage src="https://github.com/euotiniel.png" />
              <AvatarFallback>OE</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-xs md:text-sm font-medium leading-none">
                Otoniel Emanuel
              </span>

              <span className="text-xs md:text-sm text-muted-foreground">
                @euotiniel
              </span>
            </div>
          </Link>
        </div>
      </div>
      <article className="my-28">
        <MDXRemote source={props.content}></MDXRemote>
      </article>
      <Footer />
    </Container>
  );
}
