import React from 'react';
import { connect } from 'react-redux';
import firebase,  {firebaseRef, FBprovider} from '../../firebase/firebase';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions/actions';

class LoginLogin extends React.Component {
  handleLogout(){
    let { dispatch } = this.props;
    dispatch(actions.startLogout());
  }

  render(){
    return(
      <div style={{'marginTop': '15px', 'marginBottom': '15px'}}>
        <FlatButton label="LOGOUT" onClick={this.handleLogout.bind(this)} secondary={true} />
      </div>
    )
  }
};

export default connect()(LoginLogin);
