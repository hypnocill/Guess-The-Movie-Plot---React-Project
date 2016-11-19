import React, {Component} from 'react';
import { browserHistory } from 'react-router'

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';


export default class HomeDialog extends Component {
  alert(){
    browserHistory.push('/redirect');
  }

  render() {
    const paperStyle = {
      'padding': '15px',
    }
    return (

            <div style={{'marginTop': '1em', 'marginBottom': '35px'}}>
            <Paper style={paperStyle} zDepth={1}>
              <h2 style={{'margin': '0px', 'marginBottom': '15px', 'fontWeight': 'normal'}}>Wanna Play a Game</h2>
              <RaisedButton
                label="PLAY"
                secondary={true}
                onTouchTap={this.alert}
              />
            </Paper>
            </div>

    );
  }
}
