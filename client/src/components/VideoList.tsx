import * as React from 'react';
import { VideoListResult } from './VideoListResult';

const VideoList: React.FunctionComponent = () => (
  <div className='video-list-container'>
    <div>
      <VideoListResult />
      <VideoListResult />
      <VideoListResult />
      <VideoListResult />
      <VideoListResult />
      <VideoListResult />
    </div>
  </div>
);

export default VideoList;
