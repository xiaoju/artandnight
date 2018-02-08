import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

function Agenda() {
  return (
    <Segment
      inverted
      color="red"
      textAlign="center"
      padded="very"
      style={{ borderRadius: 0, marginBottom: '2em', paddingBottom: '11em' }}
    >
      <Header
        style={{ 'min-height': '2em' }}
        inverted
        color="red"
        size="huge"
        content="AGENDA"
      />
      <p>Bientôt...</p>
    </Segment>
  );
}

export default Agenda;
