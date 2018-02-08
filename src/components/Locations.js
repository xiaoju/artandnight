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
            content="LES LIEUX"
            subheader="Ce sera pour une réservation? ...Ou bien c'est vous qui invitez?"
            // content="THE LOCATIONS"
            // subheader="Book it or list it"
          />
        </Segment>
        <Card.Group itemsPerRow={2} className="ui doubling stackable">
          <Card>
            <Image src="/assets/location1.jpg" fluid />
            <Card.Content>
              <Card.Header>Lieu 1</Card.Header>
              <Card.Description>A suivre...</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src="/assets/location2.jpg" fluid />
            <Card.Content>
              <Card.Header>Lieu 2</Card.Header>
              <Card.Description>A suivre...</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Segment>
  );
}

export default Locations;
