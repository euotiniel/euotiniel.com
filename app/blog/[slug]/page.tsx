import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Container from "@/src/components/Container";
import Link from "next/link";
import { BsArrowBarLeft } from "react-icons/bs";

import { CustomMDX } from "@/src/components/mdx";

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
      <head>
        <title>{props.fontMatter.title}</title>
      </head>
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/blog/"
          className="text-muted-foreground leading-6 tracking-normal mt-5"
        >
          <BsArrowBarLeft size="20" />
        </Link>
        <div></div>
      </div>
      <div className="flex flex-col mt-10">
        <small className="text-sm text-gray-400">{props.fontMatter.date}</small>
        <h2 className="mt-1 md:mt-2 scroll-m-20 pb-1 text-xl md:text-2xl font-extrabold tracking-tight transition-colors first:mt-0">
          {props.fontMatter.title}
        </h2>
        <p className="text-base text-muted-foreground leading-6 tracking-normal md:text-base font-medium md:text-[14px] mt-2 md:mt-3">
          {props.fontMatter.description}
        </p>
      </div>
      <article className="mt-14 mb-28">
        <CustomMDX source={props.content} />
      </article>
    </Container>
  );
}
