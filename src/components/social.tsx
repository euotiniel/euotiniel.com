import React from "react";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function Social() {
  return (
    <ul className="flex flex-col md:flex-row gap-3 pt-8">
      <li data-cursor="block">
        <a
          href="/docs/otoniel-emanuel-cv.pdf"
          className="flex items-center gap-1 border-b transition-all text-neutral-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          download
        >
          <BsFillFileEarmarkPdfFill size="14.6" />
          <span className="ml-1 text-[14.5px]">resume</span>
        </a>
      </li>
      <li data-cursor="block">
        <Link
          href="https://github.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-neutral-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoGithub size="14.6" />
          <span className="ml-1 text-[14.5px]">github</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://www.linkedin.com/in/euotiniel/"
          className="flex items-center gap-1 border-b transition-all text-neutral-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoLinkedinSquare size="14.6" />
          <span className="ml-1 text-[14.5px]">linkedin</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://x.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-neutral-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoTwitter size="14.6" />
          <span className="ml-1 text-[14.5px]">twitter</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://instagram.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-neutral-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoInstagramAlt size="14.6" />
          <span className="ml-1 text-[14.5px]">instagram</span>
        </Link>
      </li>
    </ul>
  );
}