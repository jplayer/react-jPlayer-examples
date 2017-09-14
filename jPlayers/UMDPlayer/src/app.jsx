import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';

import AudioPlayer from './audioPlayer';

/* Pass the jPlayer reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers }));

/* Wrap our player in the Redux Provider and render the jPlayer.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
ReactDOM.render((
  <Provider store={store}>
    <AudioPlayer />
  </Provider>
), document.getElementById('app'));
