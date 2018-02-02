import React, { Component } from 'react';
import { Menu, Image, Grid } from 'semantic-ui-react';

export default class NavBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid relaxed>
        <Grid.Row columns={2} padded>
          <Grid.Column floated="left" width={3}>
            <Image
              href="/"
              src="/assets/logo.svg"
              fluid
              style={{
                //   // 'padding-right': '10px',
                margin: '10%',
                'min-width': '15em'
              }}
            />
          </Grid.Column>

          <Grid.Column
            stretched
            // verticalAlign="middle"
          >
            <Menu
              // vertical
              size="large"
              // pointing
              secondary
              stackable
              color="red"
            >
              <Menu.Item
                href="/"
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                // color="red"
              >
                Home
              </Menu.Item>

              <Menu.Item
                name="artists"
                href="/artists"
                active={activeItem === 'artists'}
                onClick={this.handleItemClick}
                // color="red"
              >
                Artists
              </Menu.Item>

              <Menu.Item
                name="curators"
                href="/curators"
                active={activeItem === 'curators'}
                // active="true"
                onClick={this.handleItemClick}
                // color="red"
              >
                Curators
              </Menu.Item>

              <Menu.Item
                name="locations"
                href="/locations"
                active={activeItem === 'locations'}
                onClick={this.handleItemClick}
                // color="red"
              >
                Locations
              </Menu.Item>

              <Menu.Item
                name="agenda"
                href="/agenda"
                active={activeItem === 'agenda'}
                onClick={this.handleItemClick}
                // color="red"
              >
                Agenda
              </Menu.Item>

              <Menu.Item
                name="about"
                href="/about"
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                // color="red"
              >
                About
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
