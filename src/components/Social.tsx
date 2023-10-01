import React from "react";
import Link from "next/link";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoFacebookSquare,
  BiSolidBookAlt,
} from "react-icons/bi";

export default function Social() {
  return (
    <ul className="flex flex-col sm:flex-row gap-2">
      <li>
        <Link
          href="https://github.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiLogoGithub size="20" />
          <span className="ml-1">github</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://linkedin.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiLogoLinkedinSquare size="20" />
          <span className="ml-1">linkedin</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://x.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiLogoTwitter size="20" />
          <span className="ml-1">twitter</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiLogoInstagramAlt size="20" />
          <span className="ml-1">instagram</span>
        </Link>
      </li>
      <li>
        <Link
          href="https://facebook.com/euotiniel"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiLogoFacebookSquare size="20" />
          <span className="ml-1">facebook</span>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="flex items-center gap-1 border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          target="_blank"
        >
          <BiSolidBookAlt size="18" />
          <span className="ml-1">Download CV</span>
        </Link>
      </li>
    </ul>
  );
}
