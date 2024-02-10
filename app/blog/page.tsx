import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Title from "@/src/components/Title";
import LineBreak from "@/src/components/LineBreak";
import Container from "@/src/components/Container";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function Home() {
  const blogDir = "src/content/articles";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data: frontMatter } = matter(fileContent);
      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort((a, b) => b.meta.id - a.meta.id); 

  return (
    <Container>
      <Header />
      <div className="my-12">
      <Title>Blog</Title>
      <LineBreak />
      <div>
        {blogs.map((blog) => (
          <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
            <div className="mb-5">
              <h2 className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 pb-2 font-bold text-base sm:text-base md:text-base lg:text-lg xl:text-lg tracking-tight first:mt-0">
                {truncateText(blog.meta.title, 55)}
              </h2>
              <p className="text-gray-400 text-sm">
                {truncateText(blog.meta.description, 80)}
              </p>
              <small className="my-auto text-gray-400 text-xs italic">
                {blog.meta.date}
              </small>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <Footer />
    </Container>
  );
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}
