import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
//import AppCSS from './components/AppCSS';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('page-top'));
  startStuff();
};
