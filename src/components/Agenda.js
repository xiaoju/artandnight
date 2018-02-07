import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

function Agenda() {
  return (
    <Segment inverted color="red">
      <Container>
        <Segment inverted color="red" textAlign="center" padded="very">
          <Header
            style={{ 'min-height': '2em' }}
            inverted
            color="red"
            size="huge"
            content="THE AGENDA"
          />
        </Segment>
      </Container>
    </Segment>
  );
}

export default Agenda;
