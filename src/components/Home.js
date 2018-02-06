import React from 'react';
import { Image } from 'semantic-ui-react';

const Home = () => (
  <Image fluid>
    <Image src="/assets/home.jpg" />
    <div
      style={{
        color: 'white',
        'font-size': '4rem',
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)'
      }}
    >
      ART AND NIGHT
    </div>
  </Image>
);

export default Home;
