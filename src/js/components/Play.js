import React from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import * as actions from '../actions/actions';

import PlayInput from './Play/PlayInput';
import PlayQuestion from './Play/PlayQuestion';

class Play extends React.Component {
  componentDidMount(){
    let { dispatch } = this.props;

    dispatch(actions.startGame());

  }

  render(){
    let { fetching } = this.props;
      return(
        <Grid>
          <Row center="xs">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
                {fetching == true ? <CircularProgress style={{'marginTop': '25px'}}/> : <PlayQuestion /> }
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
    return state; // da se opravi na baza na rezultata ot parviq otgovor + 'fetchedMovie'
})(Play);
