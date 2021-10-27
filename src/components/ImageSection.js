import React, {Fragment} from "react"
import {useSelector} from 'react-redux';
import LoadedImage from './LoadedImage';



const ImageSection = () => {
  const imagesUrls = useSelector((state) =>  state.images.urls)

  return (<Fragment>
    <div className={"images_section"}>
    {
      imagesUrls.map((url, id) => <LoadedImage url={url} key={id}/> )
    }
    </div>
  </Fragment>)
}

export default ImageSection