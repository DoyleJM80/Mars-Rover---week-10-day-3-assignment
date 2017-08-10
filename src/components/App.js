import React, { Component } from 'react';

import '../styles/App.css';
import GetImageForm from './GetImageForm.js';
import Bio from './Bio.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Bio />
        <GetImageForm />

      </div>
    );
  }
}

export default App;
