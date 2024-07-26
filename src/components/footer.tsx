import Link from "@/components/links"

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row sm:flex-col items-center justify-between my-8 md:my-14 text-neutral-600 dark:text-neutral-400">
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          2024 &copy;{" "}
          <Link olink="https://twitter.com/euotiniel">euotiniel</Link> .
          Hosted on <Link olink="https://vercel.com/"> ▲ </Link>{" "}
        </small>
      </div>
    </footer>
  );
}