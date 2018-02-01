import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Home = () => <h2>Home</h2>;
const Artists = () => <h2>Artists</h2>;
const Curators = () => <h2>Curators</h2>;
const Locations = () => <h2>Locations</h2>;
const Agenda = () => <h2>Agenda</h2>;
const About = () => <h2>About</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={Artists} />
          <Route path="/curators" component={Curators} />
          <Route path="/locations" component={Locations} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
