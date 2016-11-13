import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import {Link} from 'react-router';


export default class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
        <AppBar title="Guess The Movie" zDepth={2} onLeftIconButtonTouchTap={this.handleToggle.bind(this)} />
          <Drawer
              docked={false}
              width={200}
              containerStyle={{height: 'calc(100% - 64px)', top: 64}}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem containerElement={<Link to="/" />} onTouchTap={this.handleClose}>Home</MenuItem>
              <Divider />
              <MenuItem containerElement={<Link to="/play" />} onTouchTap={this.handleClose}>Play</MenuItem>
              <MenuItem containerElement={<Link to="/login" />}onTouchTap={this.handleClose}>Login</MenuItem>
              <MenuItem containerElement={<Link to="/about" />}onTouchTap={this.handleClose}>About</MenuItem>
          </Drawer>
      </div>
    );
  }
}
