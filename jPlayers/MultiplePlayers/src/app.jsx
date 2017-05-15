import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { initialState, reducer as jPlayers } from 'react-jplayer';

// Styles the jPlayer to look nice
import 'react-jplayer/src/less/skins/sleek.less';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplayer/src/less/controls/iconControls.less';

import PlayerOne from './players/playerOne';
import FooterPlayer from './players/footerPlayer';

/* Pass the jPlayer reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers }), { jPlayers:
  initialState([
    PlayerOne,
    FooterPlayer,
  ]),
});

/* Wrap our player in the Redux Provider and render the jPlayers.
The provider should go at the root of your App, just like Redux documentation recommends,
so that all components below the Provider have access to the jPlayers state
*/
ReactDOM.render((
  <Provider store={store}>
    <div>
      <PlayerOne />
      <FooterPlayer />
    </div>
  </Provider>
), document.getElementById('app'));
