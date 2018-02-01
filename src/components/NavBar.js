import React, { Component } from 'react';
import { Menu, Icon, Container, Image } from 'semantic-ui-react';
// import logo from '../assets/art_and_night-logowithText-02b.svg';
// import logo from '../assets/kkk.png';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui grid">
        <div className="column three wide">
          <Image
            href="/"
            src="/assets/logo.svg"
            fluid
            style={{
              'padding-right': '10px',
              margin: '10%',
              'min-width': '15em'
            }}
          />
        </div>

        {/* <div className="column thirteen wide right aligned"> */}
        <div className="column ten wide right floated">
          <Menu size="small" secondary stackable>
            <Menu.Menu position="right">
              <Menu.Item
                href="/"
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                color="red"
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="artists"
                href="/artists"
                active={activeItem === 'artists'}
                onClick={this.handleItemClick}
                color="red"
              >
                Artists
              </Menu.Item>

              <Menu.Item
                name="curators"
                href="/curators"
                active={activeItem === 'curators'}
                onClick={this.handleItemClick}
                color="red"
              >
                Curators
              </Menu.Item>

              <Menu.Item
                name="locations"
                href="/locations"
                active={activeItem === 'locations'}
                onClick={this.handleItemClick}
                color="red"
              >
                Locations
              </Menu.Item>

              <Menu.Item
                name="agenda"
                href="/agenda"
                active={activeItem === 'agenda'}
                onClick={this.handleItemClick}
                color="red"
              >
                Agenda
              </Menu.Item>

              <Menu.Item
                name="about"
                href="/about"
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                color="red"
              >
                About
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    );
  }
}
