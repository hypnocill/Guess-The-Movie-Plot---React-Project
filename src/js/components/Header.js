import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render(){
    return(
  <nav className="light-blue darken-1">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" style={{"marginLeft" : "5px"}}>Home</Link>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="play" activeStyle={{backgroundColor:'#0288d1'}}>Play</Link></li>
        <li><Link to="watch" activeStyle={{backgroundColor:'#0288d1'}}>What to Watch</Link></li>
        <li><Link to="about" activeStyle={{backgroundColor:'#0288d1'}}>About</Link></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><Link className="" to="/">Home</Link></li>
        <li className="divider"></li>
        <li><Link className="" to="play">Play</Link></li>
        <li><Link className="" to="watch">What to Watch</Link></li>
        <li><Link className="" to="about">About</Link></li>
      </ul>
    </div>
  </nav>
    )
  }
};
