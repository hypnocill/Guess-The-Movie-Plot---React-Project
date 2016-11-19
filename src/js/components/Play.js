import React from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import Paper from 'material-ui/Paper';

import * as actions from '../actions/actions';

import PlayInput from './Play/PlayInput';
import PlayQuestion from './Play/PlayQuestion';

class Play extends React.Component {
  componentDidMount(){
    this.props.dispatch(actions.getMovieName());
  }

  render(){
    return(
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={10} md={8} lg={6}>
            <h1 style={{'fontWeight': '300', 'fontSize': '3rem', 'margin': '15px'}}>1</h1>
            <Paper style={{'padding': '15px'}} zDepth={1}>
              <PlayQuestion />
              <PlayInput />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default connect(
  (state) => {
    return state;
})(Play);
