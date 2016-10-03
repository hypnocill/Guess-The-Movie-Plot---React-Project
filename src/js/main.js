import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';
import Play from './components/Play';
import Watch from './components/Watch';
import About from './components/About';
import Starter from './components/Starter';

import '../css/main.scss';



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="play" component={Play} />
      <Route path="watch" component={Watch} />
      <Route path="about" component={About} />
      <IndexRoute component={Starter} />
    </Route>
  </Router>,
  document.getElementById('app')
);


import adds from './adds.js';
