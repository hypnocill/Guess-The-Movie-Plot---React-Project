import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions/actions';

class PlayInput extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let userMovieName = this.props.userInput;
    this.props.dispatch(actions.clearMovieName());
  }



  render(){
    return(
      <div style={{'marginTop': '15px', 'marginBottom': '15px'}}>
        <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            onChange={(e) => this.props.dispatch(actions.storeMovieName(e.target.value))}
            hintText="Movie Name"
            style={{'width': '70%'}}
            value={this.props.userInput}
          /><br />
          <FlatButton
            type="submit"
            label="NEXT"
            secondary={true}
            onTouchTap={this.alert}
          />
        </form>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(PlayInput);
