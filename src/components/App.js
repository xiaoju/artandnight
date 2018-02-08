import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Artists from './Artists';
import Curators from './Curators';
import Locations from './Locations';
import Agenda from './Agenda';
import About from './About';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import { Segment } from 'semantic-ui-react';

const App = () => {
  return (
    <div>
      <Route path="/:activeItem?" component={NavBar} />

      <div>
        <Segment
          inverted
          color="red"
          style={{ borderRadius: 0, marginBottom: '2em', paddingBottom: '3em' }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/artists" component={Artists} />
            <Route path="/curators" component={Curators} />
            <Route path="/locations" component={Locations} />
            <Route path="/agenda" component={Agenda} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </Segment>
      </div>
      <Footer />
      {/* <Route path="/about" component={Footer} /> */}
    </div>
  );
};

export default App;
