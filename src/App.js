import React from 'react';
import './App.scss';

import Main from './components/Main';
import {STATIONS} from './data/stations';

function App() {
  return (
    <Main stations={STATIONS} />
  );
}

export default App;
