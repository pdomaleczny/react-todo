import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
// eslint-disable-next-line no-unused-vars
import style from './styles/main.scss';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
