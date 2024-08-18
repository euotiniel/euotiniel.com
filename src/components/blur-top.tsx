export default function BluTop() {
  return (
    <div>
      <div
        className="fixed top-0 z-30 h-[70px] w-full backdrop-blur-sm"
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 255) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 255) 100%)',
        }}
      ></div>
      <div
        className="fixed top-0 z-30 h-[70px] w-full backdrop-blur-md"
        style={{
          maskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      ></div>
      <div
        className="fixed top-0 z-30 h-[70px] w-full backdrop-blur-md"
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
