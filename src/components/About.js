import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';

function About() {
  return (
    <Container>
      <Grid>
        <Grid.Column>
          <Header
            inverted
            color="red"
            size="huge"
            // content="ABOUT US"
            content="A PROPOS"
            textAlign="center"
            style={{ minHeight: '3em' }}
          />
          <p>
            Nous travaillons à créer un nouveau modèle de distribution de l'art:
            plus accessible, plus intime, plus ouvert.
          </p>
          <p>A suivre...</p>
          <br />
          <p style={{ textAlign: 'right' }}>Contact: jerome@artandnight.com</p>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default About;
