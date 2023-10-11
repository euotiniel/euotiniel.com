import Links from "./Links";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row sm:flex-col items-center justify-between border-t my-8 md:my-14">
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          2023 Built by <Links olink="https://twitter.com/euotiniel">@euotiniel</Links> . Hosted on <Links olink="https://vercel.com/">Vercel</Links>{" "}
        </small>
      </div>
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          Made with <span data-cursor="block">❤️</span> and coffee
        </small>
      </div>
    </footer>
  );
}
