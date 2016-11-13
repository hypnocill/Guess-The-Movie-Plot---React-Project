import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import {grey900} from 'material-ui/styles/colors';

export default class Bottom extends React.Component {
  render() {
    return (
      <div className="footer" style={{'textAlign': 'center', 'width': '100%', 'backgroundColor': grey900}}>
        <p style={{'color': 'white'}}>Bottom</p>
      </div>
    );
  }
}
