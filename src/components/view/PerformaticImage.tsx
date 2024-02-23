"use client"
import React, { useEffect, useRef, useState } from 'react'
import ImageContainer from './ImageContainer';

export default function PerformaticImage(props:HTMLImageElement) {
    
    const figureRef = useRef(null)
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver((entry)=>{
            const [target] = entry;
            if(target.isIntersecting && !visible){
                setVisible(true)
            }
        })
        if(figureRef.current)
        observer.observe(figureRef.current)
        
        return () => observer.disconnect();
    },[])

    return (
        <figure ref={figureRef}>
            {visible && <ImageContainer {...props}/>}
        </figure>
    )
}
