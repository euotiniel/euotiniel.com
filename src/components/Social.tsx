import React from "react";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoFacebookSquare,
} from "react-icons/bi";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function Social() {
  return (
    <ul className="flex flex-col md:flex-row gap-3">
      <li data-cursor="block">
        <Link
          href="/docs/otoniel-emanuel-cv.pdf"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BsFillFileEarmarkPdfFill size="18" />
          <span className="ml-1">CV</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://github.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoGithub size="18" />
          <span className="ml-1">github</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://www.linkedin.com/in/euotiniel/"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoLinkedinSquare size="18" />
          <span className="ml-1">linkedin</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://x.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoTwitter size="18" />
          <span className="ml-1">twitter</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://instagram.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoInstagramAlt size="18" />
          <span className="ml-1">instagram</span>
        </Link>
      </li>
      <li data-cursor="block">
        <Link
          href="https://facebook.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 px-[5px] py-[2px] hover:border-gray-500"
          target="_blank"
        >
          <BiLogoFacebookSquare size="18" />
          <span className="ml-1">facebook</span>
        </Link>
      </li>
    </ul>
  );
}
