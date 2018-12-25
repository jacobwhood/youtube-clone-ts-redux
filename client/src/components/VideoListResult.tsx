import * as React from 'react';


export const VideoListResult: React.FunctionComponent = (props) => (
  <div className='video-list-result-container'>
    <img src='https://i.ytimg.com/vi/608Qz9Sd0UU/default.jpg'/>
    <div className='video-list-result-text'>
      <h4>Video Title</h4>
      <p>Video description</p>
    </div>
  </div>
);
