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

const App = () => {
  return (
    <div>
      <Route path="/:activeItem?" component={NavBar} />
      <div>
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
