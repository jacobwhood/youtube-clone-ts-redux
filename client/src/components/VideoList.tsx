import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, Store } from 'redux';

import { VideoListResult } from './VideoListResult';
import { State, VideoResult } from '../types/types';
import { updateCurrentVideo } from '../actions/actions';

interface IVideoListProps {
  videos: VideoResult[];
  onVideoListResultClick: (video: VideoResult) => void;
}

const VideoList: React.FunctionComponent<IVideoListProps> = (props) => (
  <div className='video-list-container'>
    <div>
      {props.videos.map((video: VideoResult) =>
        <VideoListResult
          video={video}
          key={video.videoId}
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            props.onVideoListResultClick((video));
          }}
        />
      )}
    </div>
  </div>
);

const mapStateToProps = (state: State) => ({
  videos: state.videos
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onVideoListResultClick: (video: VideoResult) => dispatch(updateCurrentVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
