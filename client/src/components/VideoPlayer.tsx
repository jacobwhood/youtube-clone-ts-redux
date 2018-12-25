import * as React from 'react';


const VideoPlayer: React.FunctionComponent = (props) => (
  <div className='video-player-container'>
    <iframe src='https://www.youtube.com/embed/HoXatYjoos8'></iframe>
    <div>
      <h3>Video Title</h3>
      <p>Video description</p>
    </div>
  </div>
);

export default VideoPlayer;
