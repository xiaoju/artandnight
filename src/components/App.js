import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Artists from './Artists';
import Curators from './Curators';
import Locations from './Locations';
import Agenda from './Agenda';
import About from './About';
import { Container } from 'semantic-ui-react';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Container>
            <NavBar />
          </Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/artists" component={Artists} />
            <Route path="/curators" component={Curators} />
            <Route path="/locations" component={Locations} />
            <Route path="/agenda" component={Agenda} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
