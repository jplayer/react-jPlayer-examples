import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import { reducer as jPlaylists } from 'react-jplaylist';

// Styles the jPlaylist to look nice
import 'react-jplaylist/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplaylist/src/less/controls/iconControls.less';

import PlaylistOne from './playlists/playlistOne';
import FooterPlaylist from './playlists/footerPlaylist';

/* Pass the jPlaylist reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers, jPlaylists }));

/* Wrap our player in the Redux Provider and render the jPlaylist.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlaylists state
*/
ReactDOM.render((
  <Provider store={store}>
    <div>
      <PlaylistOne />
      <FooterPlaylist />
    </div>
  </Provider>
), document.getElementById('app'));
