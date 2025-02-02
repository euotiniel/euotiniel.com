export default function BluTop() {
  return (
    <div className="dark:hidden">
      <div
        className="fixed top-0 z-30 h-[60px] w-full backdrop-blur-sm"
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
      <div
        className="fixed top-0 z-30 h-[60px] w-full backdrop-blur-md"
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
     
    </div>
  )
}
