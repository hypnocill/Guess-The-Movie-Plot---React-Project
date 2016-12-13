import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';

import themeStyle from '../../theme/themeStyle';

class PlayQuestion extends React.Component {
  render(){
    let { plot, title } = this.props.fetchedMovie;
    let { fetching } = this.props;

    let showQuestion = () => {
      if(!plot){
        return (
          <CircularProgress style={{'marginTop': '25px'}}/>
        )
      } else {
        return (
          <p style={{'textAlign': 'left'}}>{plot.replace(title, '***MOVIE NAME***')}</p>
        )
      }
    }

    return(
      <div>
        <h2 style={{'margin': '10px', 'marginBottom': '25px', 'fontWeight': '900'}}>Do you know this movie?</h2>
        <Divider />
        <div style={{'padding': '5px'}}>
          {showQuestion()}
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
      fetchedMovie: state.fetchedMovie,
      fetching: state.fetching
    };
  }
)(PlayQuestion);
