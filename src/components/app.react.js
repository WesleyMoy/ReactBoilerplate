'use strict';

import React, { Component } from 'react';
import Child from './child.react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        This is my counter
        <Child counter={this.state.counter} addCounter={() => this.addCounter} />
      </div>
    );  
  }
}

