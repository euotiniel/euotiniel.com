import React from 'react'

export default function BluTop() {
  return (
    <div
      className="fixed top-0 z-20 h-16 w-full backdrop-blur-sm"
      style={{
        maskImage:
          'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
        WebkitMaskImage:
          'linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
      }}
    ></div>
  )
}
