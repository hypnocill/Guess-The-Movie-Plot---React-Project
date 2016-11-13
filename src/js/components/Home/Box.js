/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';


export default class Box extends Component {
  alert(){
    alert("Sup");
  }

  render() {
    return (
      <Grid>
        <Row center="xs">
          <Col xs={10} sm={6}>
            <div style={{'margin': '35px'}}>
            <Paper style={{'padding': '15px'}} zDepth={1}>
              <h2 style={{'margin': '0px', 'marginBottom': '15px'}}>Wanna Play a Game?</h2>
              <RaisedButton
                label="PLAY"
                primary={true}
                onTouchTap={this.alert}
              />
            </Paper>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
