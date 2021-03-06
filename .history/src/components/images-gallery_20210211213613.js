import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Zmage from 'react-zmage'
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
    <div className="image-container">
      {images.map(image, index => (
        <Zmage src={image.original} />

        )
      )}
    </div>
  ) : null
}
export default ImagesGallery