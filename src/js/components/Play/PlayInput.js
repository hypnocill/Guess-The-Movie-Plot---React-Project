import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { grey50, pinkA200, grey100 } from 'material-ui/styles/colors';

import * as actions from '../../actions/actions';

class PlayInput extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    let { userInput, fetchedMovie, score, dispatch } = this.props;
      let fetchedMovieLowerCase = fetchedMovie.title.toLowerCase();
      let userInputLowerCase = userInput.toLowerCase();
      let guessedMovieObject = {
        title: fetchedMovie.title,
        posterURL: fetchedMovie.posterURL,
        imdbID: fetchedMovie.imdbID
      }

        if(fetchedMovieLowerCase == userInputLowerCase){
          dispatch(actions.incrementScore());
          dispatch(actions.guessedMovie(guessedMovieObject));
          dispatch(actions.getMovieName());
        } else {
            dispatch(actions.initEndGame(score)); //stores score in firebase, resets score
        };

    dispatch(actions.clearMovieName());
  }

  render(){
    let { userInput, dispatch, score } = this.props;
    let divStyle = {
      'display': 'inline-block',
      'width': '30px',
      'height': '30px',
      'borderRadius': '50%',
      'lineHeight': '30px',
      'textAlign': 'center',
      'backgroundColor': grey100,
      'color': pinkA200
    };

      return(
        <div style={{'marginTop': '15px', 'marginBottom': '15px'}}>
          <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>

            <TextField
              onChange={(e) => dispatch(actions.storeMovieName(e.target.value))}
              hintText="Movie Name"
              style={{'width': '70%'}}
              value={userInput}
            />
          <div style={divStyle}>{score}</div>
              <br />
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
    return {
      userInput: state.userInput,
      fetchedMovie: state.fetchedMovie,
      score: state.score,
    };
  }
)(PlayInput);
