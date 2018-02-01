import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/artists">Artists</a>
              </li>
              <li>
                <a href="/curators">Curators</a>
              </li>
              <li>
                <a href="/locations">Locations</a>
              </li>
              <li>
                <a href="/agenda">Agenda</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
