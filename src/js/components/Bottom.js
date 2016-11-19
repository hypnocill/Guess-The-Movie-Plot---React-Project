import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import {grey900} from 'material-ui/styles/colors';
import {grey500} from 'material-ui/styles/colors';

export default class Bottom extends React.Component {
  render() {
    return (
      <div className="footer" style={{'backgroundColor': grey900}}>
        <a href="https://github.com/hypnocill/My-Movie-Game-Web-App" target="_blank"><img style={{'marginTop': '5px'}} src="../img/GithubLogo.png" height="20"></img></a><br />
        <small style={{'color': 'white', 'color': grey500}}>Project available on GitHub. Made by Ivailo Angelov / hypnocill</small>
      </div>
    );
  }
}
