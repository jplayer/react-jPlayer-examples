import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { initialState as jPlayerInitialState, reducer as jPlayers } from 'react-jplayer';
import { initialState as jPlaylistInitialState, reducer as jPlaylists } from 'react-jplaylist';

// Styles the jPlayer to look nice
import 'react-jplaylist/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplaylist/src/less/controls/iconControls.less';

import VideoPlaylist from './videoPlaylist';

/* Pass the jPlaylist reducer and it's initialStates to the store */
const store = createStore(combineReducers({
  jPlayers,
  jPlaylists,
}), {
  jPlayers: jPlayerInitialState(VideoPlaylist),
  jPlaylists: jPlaylistInitialState(VideoPlaylist),
});

/* Wrap our player in the Redux Provider and render the jPlaylist.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
ReactDOM.render((
  <Provider store={store}>
    <VideoPlaylist />
  </Provider>
), document.getElementById('app'));
