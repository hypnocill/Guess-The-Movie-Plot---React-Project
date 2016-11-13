import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib';

import Images from './Home/Images';
import Box from './Home/Box';


export default class Home extends React.Component {
  render(){
    return(
      <div>
        <Images />
        <Box />
      </div>
    );
  }
};
