import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component{
  navigation = [
    {
      id: 0,
      name: "Home",
      path: "/",
      exact: true
    },
    {
      id: 1,
      name: "News",
      path: "/news"
    },
    {
      id: 2,
      name: "Gallery",
      path: "/gallery"
    },
    {
      id: 3,
      name: "About me",
      path: "/aboutme"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    }
  ]

  render(){
    const menu = this.navigation.map(item => (
      <li key={item.id}>
        <NavLink exact={item.exact ? true : false} to={item.path}><p>{item.name}</p></NavLink>
      </li>
    ));

    return(
      <div className="container">
        <div className="navBar">
          <div className="box">
            <ul>
              {menu}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;