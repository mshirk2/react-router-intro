import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import VendingMachine from "./VendingMachine"
import Lets from './Lets';
import Pizza from './Pizza';
import Slurm from './Slurm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/lets">
          <Lets />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
        <Route exact path="/slurm">
          <Slurm />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
