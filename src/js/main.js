//Main
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//Theme Customization
import themeStyle from './theme/themeStyle';

const muiTheme = getMuiTheme(themeStyle);

injectTapEventPlugin();

//Components
import Layout from './components/Layout.js';
import Play from './components/Play.js';
import Login from './components/Login.js';
import About from './components/About.js';
import Home from './components/Home.js';

//Styles
import '../css/main.scss';


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
          <Route path="play" component={Play} />
          <Route path="login" component={Login} />
          <Route path="about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('app')
);
