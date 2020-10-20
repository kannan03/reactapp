import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router' ;
import './index.css';
// component list
import App from './App';
import Student from './views/Student';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Student />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render((
//   <Router history = {browserHistory}>
//      <Route path = "/" component = {App}>
//         {/* <IndexRoute component = {App} /> */}
//         <Route path = "about" component = {App} />
//         <Route path = "contact" component = {Student} />
//      </Route>
//   </Router>
// ), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
