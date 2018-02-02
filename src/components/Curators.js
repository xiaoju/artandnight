import React, { Component } from 'react';
import {
  Container,
  Card,
  Icon,
  Image,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react';

function Curators() {
  return (
    <Container>
      <Segment inverted color="red" textAlign="center" padded="very">
        <Header size="huge" content="THE CURATORS" subheader="Meet the team!" />
      </Segment>
      <Card.Group itemsPerRow={4} className="ui doubling stackable">
        <Card>
          <Image src="/assets/curator1.png" fluid />
          <Card.Content>
            <Card.Header>Join us!</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="/assets/curator2.webp" fluid />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src="/assets/curator3.webp" fluid />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="/assets/matthew.png" fluid />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Curators;
