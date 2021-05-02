import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Game from './Game';

export default class Main extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Route path="/" component={Game} />
        </main>
      </div>
    );
  }
}
