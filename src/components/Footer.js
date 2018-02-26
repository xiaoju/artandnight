import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import './footer.css';

import iconRealisation from '../pictures/iconRealisation.svg';

function Footer() {
  return (
    <Grid textAlign="center" stackable>
      <Grid.Row divided>
        <Grid.Column className="noPadding" width={4}>
          <a href="http://www.xiaoju.io">
            <img
              src={iconRealisation}
              height="30"
              alt="réalisation xiaoju.io"
              style={{ margin: '0.3em' }}
            />
          </a>
        </Grid.Column>
        <Grid.Column className="noPadding" verticalAlign="middle" width={4}>
          © ART AND NIGHT
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
