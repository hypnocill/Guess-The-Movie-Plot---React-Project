import React from 'react';

import AppNav from './AppNav';
import Bottom from './Bottom';


export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <AppNav />
          {this.props.children}
        <Bottom />
      </div>
    );
  }
};
