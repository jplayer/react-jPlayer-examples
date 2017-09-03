import React from 'react';
import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
  PlaybackRateBar,
} from 'react-jplayer';

const defaultOptions = {
  id: 'FooterPlayer',
  verticalVolume: true,
  media: {
    title: 'Tempered Song',
    artist: 'Miaow',
    sources: {
      mp3: 'http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3',
      oga: 'http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg',
    },
  },
};

initializeOptions(defaultOptions);

const FooterPlayer = () => (
  <JPlayer id={defaultOptions.id} className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css */}</i></Play>
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
            <i className="fa">{/* Icon set in css */}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <PlaybackRateBar />
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

export default FooterPlayer;
