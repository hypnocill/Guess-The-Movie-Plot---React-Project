import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import themeStyle from '../theme/themeStyle.js';
import Paper from 'material-ui/Paper';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';

class Redirect extends Component {
  componentDidMount(){
    setTimeout(() => this.props.dispatch(actions.decrement()), 1000);
  }

  componentDidUpdate(){
    if(this.props.countDown <= 0){
      browserHistory.push('/play');
      this.props.dispatch(actions.resetCountDown());
    } else{
      setTimeout(() => this.props.dispatch(actions.decrement()), 1000);
    }
  }

  render() {
    return (
      <Grid>
        <Row center="xs">
          <Col xs={10} sm={6}>
            <h1>Let the games begin in...</h1><br />
            <h1 style={{'fontWeight': '300', 'margin': '0px',
                        'fontSize': '12rem', 'color': themeStyle.palette.accent1Color}}>{this.props.countDown}</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Redirect);
