import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';

function About() {
  return (
    <Segment
      inverted
      color="red"
      style={{ borderRadius: 0, marginBottom: '2em', paddingBottom: '3em' }}
    >
      <Container>
        <Grid>
          <Grid.Column>
            <Header
              inverted
              color="red"
              size="huge"
              content="ABOUT US"
              textAlign="center"
              style={{ minHeight: '3em' }}
            />
            <p>
              Nous travaillons à créer un nouveau modèle de distribution de
              l'art: plus accessible, plus intime, plus ouvert.
            </p>
            <p>A suivre...</p>
            <p>Contact: jerome@artandnight.com</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}

export default About;
