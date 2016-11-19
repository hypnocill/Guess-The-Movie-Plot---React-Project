import React from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';



import themeStyle from '../../theme/themeStyle';

class PlayQuestion extends React.Component {
  render(){
    let moviePlot = this.props.fetchedMovie.plot;
    let movieTitle = this.props.fetchedMovie.title;
    return(
      <div>
        <h2 style={{'margin': '10px', 'marginBottom': '25px', 'fontWeight': '900'}}>Do you know this movie</h2>
        <Divider />
        <div style={{'padding': '5px'}}>
        {moviePlot ? <p style={{'textAlign': 'left'}}>{moviePlot.replace(movieTitle, '---MOVIE NAME---')}</p> : <CircularProgress style={{'marginTop': '25px'}}/>}
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state
  }
)(PlayQuestion);
