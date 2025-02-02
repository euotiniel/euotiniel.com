"use client";
import Link from "next/link";
import { icon } from "@/icons";
import { components } from "@/config/components";

export default function Components() {
  return (
    <div className="flex flex-col gap-3 my-8">
      {components.map((item) => (
         <Link key={item.slug} href={`/ui/${item.slug}`} className="w-full flex items-center">
          <p className="whitespace-nowrap text-[14.5px] leading-7 text-neutral-700 dark:text-neutral-400 [&:not(:first-child)]:mt-6">{item.title}</p>
          <span className="flex-grow h-[1.5px] bg-neutral-600 dark:bg-neutral-400 mx-4 opacity-5"></span>
          <div className="opacity-30">
            <icon.ArrowRightIcon />
          </div>
       </Link>
      ))}
    </div>
  );
}
