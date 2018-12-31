import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { VideoResult, State } from '../types/types';

interface IVideoPlayerProps {
  video: VideoResult;
}


const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ video }) => (
    <div className='video-player-container'>
      <iframe src={`https://www.youtube.com/embed/${video.videoId}`}></iframe>
      <div className='video-player-container-text'>
        <h4>{video.title}</h4>
        <p>{video.description}</p>
      </div>
    </div>
  );

const mapStateToProps = (state: State) => ({
  video: state.currentVideo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
