import * as React from 'react';
import { VideoResult } from '../types/types';


interface IVideoListResultProps {
  video: VideoResult;
  key: string;
  onClick: (e: React.SyntheticEvent) => void;
}

export const VideoListResult: React.FunctionComponent<IVideoListResultProps> = (props) => (
  <div className='video-list-result-container'>
    <img src={props.video.thumbnail_url}/>
    <div className='video-list-result-text'>
      <a href='#' style={{color: 'inherit'}}>
        <h4 onClick={props.onClick}>{props.video.title}</h4>
      </a>
      <p>{props.video.description}</p>
    </div>
  </div>
);
