import { VideoResult, Action } from '../types/types';
import { UPDATE_VIDEO_LIST, UPDATE_CURRENT_VIDEO } from './actionTypes';

export const updateVideoList = (videos: VideoResult[]): Action => ({
    type: UPDATE_VIDEO_LIST,
    payload: videos
});

export const updateCurrentVideo = (video: VideoResult): Action => ({
    type: UPDATE_CURRENT_VIDEO,
    payload: video
});
