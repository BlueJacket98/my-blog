import React from "react";
import Zmage from 'react-zmage'
import useProgressiveImg from "./use-progressive-img";

const ImageComponent = (tiny, large) => {
    const [src, { blur }] = useProgressiveImg(tiny, large);
    return (
        <Zmage src={src} style={{
            width: 200,
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out"
          }} />
    )
}

export default ImageComponent