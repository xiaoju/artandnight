import React from 'react';
import { Grid, Segment, Container, Header } from 'semantic-ui-react';
import iconFacebook from '../pictures/iconFacebook.svg';
import iconTwitter from '../pictures/iconTwitter.svg';
import iconMail from '../pictures/iconMail.svg';

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

        <p>
          <Segment inverted color="red" secondary>
            <a href="mailto:jerome@artandnight.com?subject=art and night - ">
              <img
                src={iconMail}
                height="26"
                alt="email"
                style={{ margin: '0.3em' }}
              />{' '}
              jerome@artandnight.com
            </a>
            <a href="https://fb.me/artandnight">
              <img
                src={iconFacebook}
                height="26"
                alt="facebook"
                style={{ margin: '0.3em' }}
              />{' '}
              fb.me/artandnight
            </a>
            <a href="https://twitter.com/art_and_night">
              <img
                src={iconTwitter}
                height="30"
                alt="twitter"
                style={{ margin: '0.3em', padding: '0.3em' }}
              />{' '}
              twitter.com/art_and_night
            </a>
          </Segment>
        </p>
      </Container>
    </Segment>
  );
}

export default About;
