import './App.css';
import {Fragment} from 'react';
import Button from './components/Button';
import {fetchCatImages} from './metrics/loadFromApi';
import {fetchDogImages} from './metrics/loadFromApi';
import {fetchRandomImages} from './metrics/loadFromApi';
import {IMAGES_AMOUNT} from "./constants/constants";
import ImageSection from './components/ImageSection';

function App() {


  return (

    <Fragment>
      <div className="tablue">
        <div className="tablue__btns">
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

      <ImageSection/>

    </Fragment>


  );
}

export default App;
