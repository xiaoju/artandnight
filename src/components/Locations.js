import React from 'react';
import { Container, Card, Image, Header, Segment } from 'semantic-ui-react';

function Locations() {
  return (
    <Segment inverted color="red">
      <Container>
        <Segment inverted color="red" textAlign="center" padded="very">
          <Header
            inverted
            color="red"
            size="huge"
            content="THE LOCATIONS"
            subheader="Book it or list it"
          />
        </Segment>
        <Card.Group itemsPerRow={2} className="ui doubling stackable">
          <Card>
            <Image src="/assets/location1.jpg" fluid />
            <Card.Content>
              <Card.Header>Location 1</Card.Header>
              <Card.Description>Description of this location.</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src="/assets/location2.jpg" fluid />
            <Card.Content>
              <Card.Header>Location 2</Card.Header>
              <Card.Description>Description of this location.</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Segment>
  );
}

export default Locations;
