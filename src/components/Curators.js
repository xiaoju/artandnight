import React from 'react';
import { Container, Card, Image, Header, Segment } from 'semantic-ui-react';

function Curators() {
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
          // content="THE CURATORS"
          // subheader="Meet the team!"
          content="LES CURATEURS"
          subheader="Présentation de l'équipe!"
        />
        <Card.Group itemsPerRow={3} className="ui doubling stackable">
          <Card>
            <Image src="/assets/curator1.png" fluid />
            <Card.Content>
              {/* <Card.Header>Join us!</Card.Header> */}
              <Card.Header>
                Rejoignez <em>art and night</em>!
              </Card.Header>
              {/* <Card.Meta>
                <span className="date">Some more text.</span>
              </Card.Meta> */}
              <Card.Description>
                <a href="mailto:jerome@artandnight.com?subject=art and night - ">
                  {' '}
                  jerome@artandnight.com
                </a>
              </Card.Description>
            </Card.Content>
          </Card>

          {/* <Card>
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
            <Image src="/assets/curator4.png" fluid />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Some more text.</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card> */}
        </Card.Group>
      </Container>
    </Segment>
  );
}

export default Curators;
