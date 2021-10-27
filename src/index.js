import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './redux/rootReducer';
import './style.css';
import './metrics/index'

const store = createStore(
  rootReducer,
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
