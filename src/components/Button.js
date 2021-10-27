import React, {Fragment} from "react"
import {useDispatch} from 'react-redux';
import {ADD_IMAGE} from '../redux/types';


const Button = (props) => {
  const dispatch_state = useDispatch()
  const clickHandler = async () => {
    let urls = await props.loadImages()
    dispatch_state({type: ADD_IMAGE, payload: {urls}})
  }


  return (
      <Fragment>
        <button className={props.className}
        onClick={clickHandler}>{props.textLabel}</button>
      </Fragment>
    )
}

export default Button