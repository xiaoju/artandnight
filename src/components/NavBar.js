import React, { Component } from 'react';
import { Menu, Image, Container, Grid } from 'semantic-ui-react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.match.params.activeItem || 'home'
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Menu size="large" secondary stackable color="red">
          <Menu.Item
            href="/home"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Image
              href="/"
              src="/assets/logo.svg"
              style={{
                maxWidth: '10em'
              }}
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              href="/home"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              {/* Home */}
              Accueil
            </Menu.Item>

            <Menu.Item
              name="artists"
              href="/artists"
              active={activeItem === 'artists'}
              onClick={this.handleItemClick}
            >
              {/* Artists */}
              Artistes
            </Menu.Item>

            <Menu.Item
              name="curators"
              href="/curators"
              active={activeItem === 'curators'}
              onClick={this.handleItemClick}
            >
              {/* Curators */}
              Curateurs
            </Menu.Item>

            <Menu.Item
              name="locations"
              href="/locations"
              active={activeItem === 'locations'}
              onClick={this.handleItemClick}
            >
              {/* Locations */}
              Lieux
            </Menu.Item>

            <Menu.Item
              name="agenda"
              href="/agenda"
              active={activeItem === 'agenda'}
              onClick={this.handleItemClick}
            >
              {/* Agenda */}
              Agenda
            </Menu.Item>

            <Menu.Item
              name="about"
              href="/about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              {/* About */}
              A propos
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
