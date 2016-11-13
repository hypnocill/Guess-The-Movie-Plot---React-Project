import React from 'react';

import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib'


export default class Images extends React.Component {
  render(){
    const style = {
      height: 240,
      width: 160,
      margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };
    return(
      <Grid>
        <Row center="xs"><h1>You Know These?</h1></Row>
        <Row center="xs">
            <img height="240" width="160" src="../img/1.jpg"></img>
            <img height="240" width="160" src="../img/2.jpg"></img>
            <img className="element" height="240" width="160" src="../img/3.jpg"></img>
            <img className="element" height="240" width="160" src="../img/4.jpg"></img>
            <img className="element" height="240" width="160" src="../img/5.jpg"></img>
            <img className="element" height="240" width="160" src="../img/6.jpg"></img>
        </Row>
      </Grid>


    );
  }
};
