import React from 'react';
import { Grid } from 'semantic-ui-react';

function Footer() {
  return (
    <Grid
      textAlign="center"
      stackable
      style={{ padding: '1rem 1rem !important' }}
    >
      <Grid.Row divided>
        <Grid.Column width={3}>© ART AND NIGHT</Grid.Column>
        <Grid.Column width={3}>
          Réalisation <a href="http://www.xiaoju.io">xiaoju.io</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

// also changed
// padding: 0rem 0rem !important
// into
// .ui.grid > .stackable.stackable.row > .column {
// of
// semantic-ui-css/semantic.css

export default Footer;
