import Links from "./Links";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row sm:flex-col items-center justify-between my-8 md:my-14">
      <div className="mt-9 sm:mb-3">
        <small className="text-sm font-normal leading-none">
          2024 &copy;{" "}
          <Links olink="https://twitter.com/euotiniel">euotiniel</Links> .
          Hosted on <Links olink="https://vercel.com/"> ▲ </Links>{" "}
        </small>
      </div>
    </footer>
  );
}
