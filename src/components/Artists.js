import React from 'react';
import { Container, Card, Image, Header, Segment } from 'semantic-ui-react';
function Artists() {
  return (
    <Segment inverted color="red">
      <Container>
        <Segment inverted color="red" textAlign="center" padded="very">
          <Header
            inverted
            color="red"
            size="huge"
            content="THE ARTISTS"
            // subheader="Meet the team!"
          />
        </Segment>
        <Card.Group itemsPerRow={3} className="ui doubling stackable">
          <Card>
            <Image src="/assets/artist1.png" fluid />
            <Card.Content>
              <Card.Header>Join us!</Card.Header>
              {/* <Card.Meta>
                <span className="date">Some more text.</span>
              </Card.Meta> */}
              <Card.Description>
                You want to be represented by art and night and showcase your
                work at one of our exclusive locations? Pick the curator who
                fits you best on our Curators page... and apply by sending
                directly your portfolio to her/him!
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
        </Card.Group>
      </Container>
    </Segment>
  );
}

export default Artists;
