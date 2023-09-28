import React from "react";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoFacebookCircle,
} from "react-icons/bi";

export default function Social() {
  return (
    <ul className="flex flex-row gap-4">
      <li>
        <a
          href=""
          className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
        >
          <BiLogoGithub size="18" />
          <span className="ml-1">github</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
        >
          <BiLogoLinkedinSquare size="18" />
          <span className="ml-1">linkedin</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
        >
          <BiLogoTwitter size="18" />
          <span className="ml-1">twitter</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
        >
          <BiLogoInstagramAlt size="18" />
          <span className="ml-1">instagram</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="flex items-center  border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
        >
          <BiLogoFacebookCircle size="18" />
          <span className="ml-1">facebook</span>
        </a>
      </li>
    </ul>
  );
}
