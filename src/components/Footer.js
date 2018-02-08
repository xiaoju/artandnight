import React from 'react';
import { Grid } from 'semantic-ui-react';
import './footer.css';

function Footer() {
  return (
    <Grid textAlign="center" stackable>
      <Grid.Row divided>
        <Grid.Column className="noPadding" width={3}>
          © ART AND NIGHT
        </Grid.Column>
        <Grid.Column className="noPadding" width={3}>
          Réalisation <a href="http://www.xiaoju.io">xiaoju.io</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
