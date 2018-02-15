import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
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
          <Image
            href="http://www.xiaoju.io"
            src="/assets/xiaoju_logo.svg"
            style={{
              width: '1.2em',
              paddingBottom: '0.38em',
              marginLeft: '0.3em'
            }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
