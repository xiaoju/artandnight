import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

function PageNotFound() {
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
          style={{ 'min-height': '2em' }}
          inverted
          color="red"
          size="huge"
          // content="404"
          content="404"
        />
        {/* <p>Page not found</p> */}
        <p>La page recherchée n'existe pas.</p>
        <p>:-(</p>
        <br />
        <br />
        <br />
      </Container>
    </Segment>
  );
}

export default PageNotFound;
