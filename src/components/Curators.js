import React, { Component } from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

function Curators() {
  return (
    <div>
      <div>
        <h1 className="ui center aligned page grid">THE CURATORS</h1>
        <h3 className="ui center aligned page grid">Meet the team!</h3>
      </div>
      <Card.Group className="ui center aligned page grid">
        <Card>
          <Image src="/assets/curator1.png" />
          <Card.Content>
            <Card.Header>Join us!</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="/assets/curator2.webp" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Image src="/assets/curator3.webp" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image src="/assets/matthew.png" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Some more text.</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Curators;
