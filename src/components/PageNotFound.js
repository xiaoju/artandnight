import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

const PageNotFound = () => (
  <Segment inverted color="red">
    <Container>
      <Segment inverted color="red" textAlign="center" padded="very">
        <Header size="huge" content="404" subheader="Page not found :-(" />
      </Segment>
    </Container>
  </Segment>
);

export default PageNotFound;
