import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { initialState, reducer as jPlayers } from 'react-jplayer';

// Styles the jPlayer to look nice
import 'react-jplayer/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplayer/src/less/controls/iconControls.less';

import AudioPlayer from './audioPlayer';

/* Pass the jPlayer reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers }), { jPlayers: initialState(AudioPlayer) });

/* Wrap our player in the Redux Provider and render the jPlayer.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
ReactDOM.render((
  <Provider store={store}>
    <AudioPlayer />
  </Provider>
), document.getElementById('app'));
