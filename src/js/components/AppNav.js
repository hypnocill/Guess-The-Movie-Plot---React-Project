import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import firebase,  {firebaseRef, FBprovider} from '../firebase/firebase';
import * as actions from '../actions/actions'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';


import {Link} from 'react-router';


class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render(){
    let auth = firebase.auth().currentUser;
    let photoURL = auth ? firebase.auth().currentUser.photoURL : false;
    let myStats = <MenuItem containerElement={<Link to="/stats" />} onTouchTap={this.handleClose}>My Profile</MenuItem>;

    return(
      <div>
        <AppBar title="My Movie Game" zDepth={2}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                iconElementRight={<Link to="/stats"><Avatar icon={<Person />} src={photoURL ? photoURL : ''} /> </Link>}
                iconStyleRight={{'marginTop': '10px', 'marginBottom': '10px'}}
        />
          <Drawer
              docked={false}
              width={200}
              containerStyle={{height: 'calc(100% - 64px)', top: 64}}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <div id="menuImg"></div>
              <MenuItem containerElement={<Link to="/" />} onTouchTap={this.handleClose}>Home</MenuItem>
              <Divider />
              <MenuItem containerElement={<Link to="/redirect" />}  onTouchTap={this.handleClose}>Play</MenuItem>
              {auth ? myStats : null}
              <MenuItem containerElement={<Link to="/login" />} onTouchTap={this.handleClose}>{auth ? 'Logout' : 'Login' }</MenuItem>
              <MenuItem containerElement={<Link to="/about" />} onTouchTap={this.handleClose}>About</MenuItem>
          </Drawer>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth
  };
})(AppNav);
