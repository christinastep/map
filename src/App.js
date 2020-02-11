import React from 'react';
import './App.scss';

import Main from './components/Main';
import Home from './components/Home';
import {STATIONS} from './data/stations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    //<Main stations={STATIONS} />
    <main>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/settings" component={Main} />
          <Route path="/map" component={Main} />
      </Switch>
  </main>
  );
}

export default App;
