import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import HotelList from './Hotels/hotel-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotelList />, document.getElementById('root'));
registerServiceWorker();
