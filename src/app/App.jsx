import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormattedMessage
              tag="h1"
              id="hello"
              defaultMessage="Welcome to React"
            />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
