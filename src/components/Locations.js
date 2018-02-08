import React from 'react';
import { Container, Card, Image, Header, Segment } from 'semantic-ui-react';

function Locations() {
  return (
    <Segment
      inverted
      color="red"
      textAlign="center"
      padded="very"
      style={{ borderRadius: 0, marginBottom: '2em', paddingBottom: '3em' }}
    >
      <Container>
        <Header
          style={{ marginBottom: '2em' }}
          inverted
          color="red"
          size="huge"
          content="LES LIEUX"
          subheader="Ce sera pour une réservation? ...Ou bien c'est vous qui invitez?"
          // content="THE LOCATIONS"
          // subheader="Book it or list it"
        />
        <Card.Group itemsPerRow={2} className="ui doubling stackable">
          <Card>
            <Image src="/assets/location1.jpg" fluid />
            <Card.Content>
              <Card.Header>Ici</Card.Header>
              <Card.Description>A suivre...</Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Image src="/assets/location2.jpg" fluid />
            <Card.Content>
              <Card.Header>ou là</Card.Header>
              <Card.Description>A suivre...</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Segment>
  );
}

export default Locations;
