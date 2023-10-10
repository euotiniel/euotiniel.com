import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/src/Layout";
import Title from "@/src/components/Title";
import Subtitle from "@/src/components/Subtitle";
import LineBreak from "@/src/components/LineBreak";

export default function Home() {
  const blogDir = "src/content/articles";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <Layout>
      <Title>Blog</Title>
      <LineBreak />
      <div>
        {blogs.map((blog) => (
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="mb-8">
              <Subtitle>{truncateText(blog.meta.title, 50)}</Subtitle>
              <p className="text-gray-400 text-sm">
                {truncateText(blog.meta.description, 80)}
              </p>
              <small className="my-auto text-gray-400 text-xs italic">{blog.meta.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
