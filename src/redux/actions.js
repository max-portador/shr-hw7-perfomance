import {ADD_IMAGE, CLEAR_IMAGES_SECTION} from './types';


export const addImage = (url) => {
  return {
    type: ADD_IMAGE,
    payload: { url },
  }
}

export const clearImagesSection = () => {
  return {
    type: CLEAR_IMAGES_SECTION
  }
}
