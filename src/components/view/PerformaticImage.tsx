"use client"
import React, { useEffect, useRef, useState } from 'react'

type PerformaticImage = HTMLImageElement

export default function PerformaticImage({src,alt}:PerformaticImage) {
    
    const imageRef = useRef(null)
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            const [target] = entry;
            if(target.isIntersecting && !visible){
                setVisible(true)
            }
        })
        if(imageRef.current)
        observer.observe(imageRef.current)
        
        return () => observer.disconnect();
    },[])

    return (
        <figure ref={imageRef}>
            {visible ? <img  src={src} alt={alt} className="w-full h-auto object-cover mb-4"/> : <div className='w-full h-96 bg-black bg-opacity-20 backdrop-blur-sm animate-pulse rounded-sm'/>}
        </figure>
    )
}
