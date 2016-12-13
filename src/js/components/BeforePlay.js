import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import firebase,  {firebaseRef, FBprovider} from '../firebase/firebase';

import LoginLogin from './Login/LoginLogin';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';


class BeforePlay extends Component {
  startPlay(){
    browserHistory.push('/redirect');
  }

  render() {
    const paperStyle = {
      'padding': '15px',
    }
    return (
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
              <LoginLogin />
              <RaisedButton
                style={{'marginTop': '15px'}}
                label="PLAY ANONYMOUSLY"
                secondary={true}
                onTouchTap={this.startPlay}
              />

            </Paper>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth
  };
})(BeforePlay);
