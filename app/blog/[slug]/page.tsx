import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import ShareButton from "@/components/share-button";

function formatDate(date: string) {
  const [year, month, day] = date.split(/[.-]/);
  return `${day}/${month}/${year}`;
}

export default async function Page(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const { default: MDXContent, metadata } = await import(
    "../_articles/" + `${params.slug}.mdx`
  );

  return (
    <main className="antialiased max-w-[560px] mx-auto px-6 py-12">
      <div className="mb-10 flex items-center justify-between">
        <Link href="/blog" className="text-sm text-[#0000EE] opacity-70">
          ← Voltar
        </Link>

        <div className="cursor-pointer rounded-full border-transparent bg-neutral-400/20 p-1.5 flex items-center justify-center ">
          <ShareButton />
        </div>
      </div>

      <header className="flex flex-col md:items-center md:justify-center w-full gap-2 my-14 text-wrap-balance">
        <h1 className="text-[20px] leading-tight font-semibold text-black">
          {metadata.title}
        </h1>
        <p className="text-[14.9px] md:text-center leading-6 text-neutral-600 ">
          {metadata.description}
        </p>
      </header>

      <article>
        <MDXContent />
      </article>

      <div className="w-full flex items-end justify-end my-12">
        {metadata.date && (
          <time className="mt-2 block text-sm text-neutral-700">
            Aos {formatDate(metadata.date)}
          </time>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), "app", "blog", "_articles"),
  );

  return articles
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      params: {
        slug: name.replace(/\.mdx$/, ""),
      },
    }));
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const metadata = (await import("../_articles/" + `${params.slug}.mdx`))
    .metadata;

  if (metadata.image) {
    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        images: [metadata.image],
      },
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
