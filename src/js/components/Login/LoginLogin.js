import React from 'react';
import { connect } from 'react-redux';
import firebase,  {firebaseRef, FBprovider} from '../../firebase/firebase';

import { indigo500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import * as actions from '../../actions/actions';

class LoginLogin extends React.Component {
  handleLogin(){
    let { dispatch } = this.props;
    dispatch(actions.startLogin());
  }

  render(){
    return(
        <div>
          <RaisedButton
            style={{'marginTop': '15px'}}
            label="Login with Facebook"
            labelColor={'#FFFFFF'}
            backgroundColor={indigo500}
            onTouchTap={this.handleLogin.bind(this)}
          />
        <br />
          <small>to keep track of your stats</small>
        </div>
    )
  }
};

export default connect()(LoginLogin);
