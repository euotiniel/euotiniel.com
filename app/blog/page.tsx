import Navbar from "@/components/navbar";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

export const metadata = { title: "Blog" };

const articlesDir = path.join(process.cwd(), "app", "blog", "_articles");

function truncateTitle(title: string, maxLength: number = 32): string {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength).trim() + "...";
}

function getSortableDate(dateStr: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split(/[.-]/);
  if (parts.length !== 3) return 0;
  const [year, month, day] = parts.map(Number);
  return new Date(year, month - 1, day).getTime();
}

function formatDisplayDate(dateStr: string): string {
  const parts = dateStr.split(/[.-]/);
  if (parts.length !== 3) return dateStr;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
}

export default async function Page() {
  const files = await fs.readdir(articlesDir);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const articles = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { metadata } = await import(`./_articles/${file}`);
      const rawDate = metadata?.date || "";
      return {
        slug,
        title: metadata?.title || slug,
        sortDate: getSortableDate(rawDate),
        displayDate: rawDate ? formatDisplayDate(rawDate) : "-",
      };
    }),
  );

  articles.sort((a, b) => b.sortDate - a.sortDate);

  return (
    <div className="antialiased max-w-[560px] mx-auto px-6 py-12">
      <Navbar />
      <main className="mt-8">
        <h1 className="font-semibold mb-7 text-black">Blog</h1>
        <p className="my-7 text-justify text-neutral-700 text-[15.6px]">O Lucas Montano fez um react (não js) ao meu artigo, <Link href="https://www.youtube.com/watch?v=teU_RL7QOT4&t=15s" className="text-[#0000EE] underline underline-offset-2 decoration-[#0000EE]" target="_blank">assista aqui</Link>. Você também pode encontrar artigos menos técnicos no meu <Link href="https://substack.com/@euotiniel" className="text-[#0000EE] underline underline-offset-2 decoration-[#0000EE]" target="_blank">substack</Link>.</p>
        <ul className="space-y-5">
          {articles.map(({ slug, title, displayDate }) => (
            <li key={slug}>
              <Link
                href={`/blog/${slug}`}
                className="flex justify-between items-center"
              >
                <span className="text-[15.5px] font-medium text-neutral-900">
                  {truncateTitle(title)}
                </span>
                <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>

                <time className="text-sm text-neutral-700">{displayDate}</time>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
