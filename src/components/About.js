import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';

function About() {
  return (
    <Segment inverted color="red">
      <Container>
        <Grid stretched columns={1}>
          <Grid.Column>
            <Segment inverted color="red" padded="very" textAlign="center">
              <Header inverted color="red" size="huge" content="ABOUT US" />
              <p>
                Nous travaillons à créer un nouveau modèle de distribution de
                l'art: plus accessible, plus intime, plus ouvert.
              </p>
              <p>A suivre...</p>
              <p>Contactez-nous: jerome@artandnight.com</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}

export default About;
