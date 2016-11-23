import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import firebase,  {firebaseRef, FBprovider} from '../firebase/firebase';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import Paper from 'material-ui/Paper';


import UserStats from './Stats/UserStats';
import LoginLogin from './Login/LoginLogin';


class Stats extends React.Component {

  render(){
    let auth = firebase.auth().currentUser;

      return(
        <Grid>
          <Row center="xs">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
                {!auth ? <LoginLogin /> : <UserStats />}
              </Paper>
            </Col>
          </Row>
        </Grid>
      )
    }
};

export default connect((state) => {
  return {
    auth: state.auth,
    userData: state.userData
  };
})(Stats);
