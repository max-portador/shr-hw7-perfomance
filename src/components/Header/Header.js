import React, {Fragment} from 'react';
import {IMAGES_AMOUNT} from '../../constants/constants';
import {fetchCatImages, fetchDogImages, fetchRandomImages} from '../../metrics/loadFromApi';
import Button from './Button';

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="header__btns">
          <Button className="loadDogs"
                  loadImages={fetchDogImages}
                  eventName = "onLoadDogsImage"
                  textLabel={`Load ${IMAGES_AMOUNT} dogs images`}/>

          <Button className="loadCats"
                  loadImages={fetchCatImages}
                  eventName = "onLoadCatsImage"
                  textLabel={`Load ${IMAGES_AMOUNT} cats images`}/>

          <Button className="loadRandoms"
                  loadImages={fetchRandomImages}
                  eventName = "onLoadRandomImages"
                  textLabel={`Load ${IMAGES_AMOUNT} random images`}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Header