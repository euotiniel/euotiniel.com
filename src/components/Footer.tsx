import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row sm:flex-col items-center justify-between border-t my-8 md:my-14">
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          &copy; 2023 Otoniel Emanuel -{" "}
          <Link
            href="https://github.com/euotiniel"
            className="border-b transition-all duration-500 hover:border-gray-400"
          >
            MIT License
          </Link>
        </small>
      </div>
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          Made with ❤️ and coffee
        </small>
      </div>
    </footer>
  );
}