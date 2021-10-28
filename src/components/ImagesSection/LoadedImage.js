import React, {Fragment} from 'react';

const LoadedImage = ({url}) => {
  return (
    <Fragment>
        <div className="img__item">
            <img src={url} alt="fetch"/>
        </div>
    </Fragment>
  )
}

export default LoadedImage