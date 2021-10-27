import {combineReducers} from "redux"
import {imagesReducer} from './imagesReducer';

export const rootReducer = combineReducers({
  images: imagesReducer,
})