import React, { useEffect, useRef, useState } from 'react'

export default function ImageContainer({src,alt,className}:HTMLImageElement) {
    const imageRef = useRef(null)
    const [imageContent,setImageContent] = useState("")
    console.log()

    useEffect(()=>{
        const image = new Image();
        image.src = src;
        image.onload = () => setImageContent(src)
    },[])

  return imageContent ? <img ref={imageRef} src={imageContent} alt={alt} className={className}/> : <div className='w-full h-96 bg-transparent bg-opacity-0 backdrop-blur-sm animate-pulse border rounded-sm'/>

}