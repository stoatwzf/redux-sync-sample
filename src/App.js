import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(
	thunkMiddleware
));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>React redux sync</h1>
      </Provider>
    );
  }
}

export default App;
