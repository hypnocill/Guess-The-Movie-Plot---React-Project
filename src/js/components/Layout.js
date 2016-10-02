import React from 'react';

import Header from './Header';

export default class Layout extends React.Component{
  render(){
    return(
    <div>
      <Header />
      <h1>LAYOUT COMPONENT</h1>
      {this.props.children}
    </div>
  );
  }
};
