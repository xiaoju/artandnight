import React from 'react';
import { Image } from 'semantic-ui-react';

const Home = () => (
  <Image>
    <Image fluid src="/assets/home.jpg" />
    <div
      style={{
        color: 'white',
        fontSize: '4rem',
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
