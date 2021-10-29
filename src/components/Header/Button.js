import React, {Fragment} from "react"
import {useDispatch} from 'react-redux';
import {ADD_IMAGE} from '../../redux/types';


const Button = (props) => {
  const dispatch_state = useDispatch()

  const clickHandler = async () => {
    // засекаем начало загрузки
    let timeStart = performance.now()

    // ждем пока все запросы придут
    let urls = await props.loadImages()

    //обновляем список urls для картинок в state
    dispatch_state({type: ADD_IMAGE, payload: {urls}})

    //получаем время загрузки картинок
    const loadingDuration = performance.now() - timeStart

    //вызываем событие, которое отправляет статистику на сервер
    window.dispatchEvent(new CustomEvent( props.eventName, {
      detail: {loadingDuration}
    }))
  }

  return (
      <Fragment>
        <button className={props.className}
        onClick={clickHandler}>{props.textLabel}</button>
      </Fragment>
    )
}

export default Button