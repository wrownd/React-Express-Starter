import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Communities from './components/communities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Communities />
      </div>
    );
  }
}

export default App;
