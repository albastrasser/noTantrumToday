import React, { Component } from 'react';
import NameEntry from './NameEntry';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <img className={'title'} src="/annastitle.png" />
        <h3>
          Chat with your friends and make group decisions to try and get through
          the morning without having a TANTRUM!
        </h3>
      </nav>
    );
  }
}
