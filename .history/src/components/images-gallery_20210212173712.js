import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
// import Zmage from 'react-zmage'
// import useProgressiveImg from "./useProgressiveImg";
import ImageComponent from "./image-component"
import Masonry from "react-masonry-component";
import styled from "styled-components";
import "../utils/css/portfolio.scss"


const ImagesGallery = () => {
  const [images, setImages] = React.useState(null)
  React.useEffect(() => {
    let shouldCancel = false
    const call = async () => {
      const response = await axios.get(
        'https://google-photos-api.glitch.me/WnVeb1p4Y44HMqPB6'
      );
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        })))
      }
    }
    call()
    return () => shouldCancel = true
  }, [])

  return images ? (
    // <Zmage src={images[0].original} />
    <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'div'} // default 'div'
            options={{transitionDuration: 5, transitionProperty: 'width', columnWidth: '500px'}} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {images.map(image => (
        <div class="item"> 
          <ImageComponent tiny={image.thumbnail} large={image.original}/>
        </div>
        )
      )}
    </Masonry>
  ) : null
}
export default ImagesGallery


