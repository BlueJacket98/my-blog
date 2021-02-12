import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
// import Zmage from 'react-zmage'
// import useProgressiveImg from "./useProgressiveImg";
import ImageComponent from "./image-component"
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
    <div class="grid">
      {images.map(image => (
        <div class="item"> 
          <ImageComponent tiny={image.thumbnail} large={image.original}/>
        </div>
        )
      )}
    </div>
  ) : null
}
export default ImagesGallery


function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}