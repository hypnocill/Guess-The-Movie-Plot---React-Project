import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Grid, Row, Col } from 'react-flexbox-grid/lib';
import Paper from 'material-ui/Paper';


import UserStats from './Stats/UserStats';
import LoginLogin from './Login/LoginLogin';


export default class About extends React.Component {

  render(){
      return(
        <Grid>
          <Row center="xs">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Paper style={{'padding': '15px', 'marginTop': '21px'}} zDepth={1}>
                <p style={{'textAlign': 'left'}}>This is a side project made mainly for practice with ReactJS and its ecosystem. <br />
                  Obviously it's not a competitive game by any means as it uses a free API (a very useful one) - https://www.omdbapi.com/ <br />
                You can inspect the project in-depth at https://github.com/hypnocill/My-Movie-Game-Web-App <br /><br />
                  If you have any questions or just want to say 'Hi', you can message me at - hypnocill at gmail.com
                </p>
              </Paper>
            </Col>
          </Row>
        </Grid>
      )
    }
};
