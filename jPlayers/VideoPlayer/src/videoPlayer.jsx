/* eslint react/prop-types: 0 */
import React from 'react';
import { connect, JPlayer, Gui, SeekBar, BufferBar,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported } from 'react-jplayer';

const VideoPlayer = () => (
  <JPlayer className="jp-sleek">
    <div className="jp-media">
      <Poster />
      <Video />
    </div>
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Repeat><i className="fa fa-repeat" /></Repeat>
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
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

const options = {
  id: 'VideoPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    artist: 'peach.blender',
    title: 'Big Buck Bunny Trailer',
    sources: {
      m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
      webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
    },
    poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
  },
};

export default connect(VideoPlayer, options);