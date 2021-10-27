import {ADD_IMAGE} from './types';

const initialState = {
  urls: []
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_IMAGE: {
      return {...state, urls: action.payload.urls }
    }

    default: {
      return state
    }
  }

}