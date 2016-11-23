import React from 'react';
import { connect } from 'react-redux';
import firebase,  {firebaseRef, FBprovider} from '../../firebase/firebase';

import Paper from 'material-ui/Paper';

import * as actions from '../../actions/actions';

class LoginLogin extends React.Component {
  handleLogin(){
    let { dispatch } = this.props;
    dispatch(actions.startLogin());
  }

  render(){
    return(
      <div className="links" onClick={this.handleLogin.bind(this)} style={{'marginTop': '15px', 'marginBottom': '15px'}}>
        <img height="90" src="../../img/fblogin.png"></img>
      </div>
    )
  }
};

export default connect()(LoginLogin);
