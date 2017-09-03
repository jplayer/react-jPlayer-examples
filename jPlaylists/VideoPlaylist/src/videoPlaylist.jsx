/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Gui, SeekBar, BufferBar,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
} from 'react-jplayer';
import JPlaylist, {
  connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle
} from 'react-jplaylist';

const VideoPlaylist = props => (
  <JPlaylist className="jp-sleek">
    <div className="jp-media">
      <Poster />
      <Video events={props.events} />
    </div>
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Previous><i className="fa fa-step-backward" /></Previous>
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Next><i className="fa fa-step-forward" /></Next>
        <Repeat>
          <i className="fa">{/* Icon set in css*/}</i>
          <i className="fa fa-repeat" />
        </Repeat>
        <Shuffle><i className="fa fa-random" /></Shuffle>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-playlist-container">
          <Playlist>
            <Remove />
            <MediaLink>
              <PlaylistTitle />
            </MediaLink>
          </Playlist>
          <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlaylist>
);

const options = {
  id: 'VideoPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      title: 'Big Buck Bunny Trailer',
      artist: 'peach.blender',
      sources: {
        m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
        ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
        webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
      },
      poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
    },
    {
      title: 'Finding Nemo Teaser',
      artist: 'Pixar',
      sources: {
        webmv: 'http://www.jplayer.org/video/webm/Finding_Nemo_Teaser.webm',
      },
      poster: 'http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png',
    },
    {
      title: 'Incredibles Teaser',
      artist: 'Pixar',
      sources: {
        webmv: 'http://www.jplayer.org/video/webm/Incredibles_Teaser.webm',
      },
      poster: 'http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png',
    },
  ],
};

export default connect(VideoPlaylist, options, jPlaylistOptions);
