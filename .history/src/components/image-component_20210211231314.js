import React from "react";
import Zmage from 'react-zmage'
import useProgressiveImg from "./use-progressive-img";

const ImageComponent = ({tiny, large}) => {
    const [src, { blur }] = useProgressiveImg(tiny, large);
    return (
        blur ? (
					<Zmage src={src} className="image-itself-blur" />
				) : (
					<Zmage src={src} className="image-itself-no-blur" />
        )
        
    )
}

export default ImageComponent