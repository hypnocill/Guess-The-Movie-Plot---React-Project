import React from 'react';

import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';


export default class HomeImages extends React.Component {
  render(){
    const style = {
      height: 240,
      width: 160,
      margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };
    return(
      <div>
        <h1 style={{'fontWeight':'normal'}}>You Know These</h1>
          <img height="200" width="133" src="../img/1.jpg"></img>
          <img height="200" width="133" src="../img/2.jpg"></img>
          <img className="element" height="200" width="133" src="../img/3.jpg"></img>
          <img className="element" height="200" width="133" src="../img/4.jpg"></img>
          <img className="element" height="200" width="133" src="../img/5.jpg"></img>
          <img className="element" height="200" width="133" src="../img/6.jpg"></img>
      </div>
    );
  }
};
