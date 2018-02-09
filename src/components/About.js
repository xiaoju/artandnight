import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

function About() {
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
          style={{ minHeight: '3em' }}
          inverted
          color="red"
          size="huge"
          // content="ABOUT US"
          content="A PROPOS"
        />
        <p>
          Nous travaillons à créer un nouveau modèle de distribution de l'art:
          plus accessible, plus intime, plus ouvert.
        </p>
        <p>A suivre...</p>
        <br />
        <p style={{ textAlign: 'right' }}>jerome@artandnight.com</p>
      </Container>
    </Segment>
  );
}

export default About;
