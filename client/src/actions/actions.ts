import { Dispatch, ActionCreator, AnyAction } from 'redux';

import { VideoResult, Action} from '../types/types';
import { UPDATE_VIDEO_LIST, UPDATE_CURRENT_VIDEO } from './actionTypes';
import { searchYouTube } from '../api/searchYoutube';


export const updateVideoList: ActionCreator<Action> = (videos: VideoResult[]): Action => ({
    type: UPDATE_VIDEO_LIST,
    payload: videos
});

export const updateCurrentVideo = (video: VideoResult): Action => ({
    type: UPDATE_CURRENT_VIDEO,
    payload: video
});

export const updateCurrentVideoThunkAction = (video: VideoResult) => {
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(updateCurrentVideo(video));
    };
};


export const searchYouTubeAsync = (q: string) => {
    return async (dispatch: Dispatch<Action>): Promise<Action> => {
        try {
            let videos = await searchYouTube(q);

            videos ? dispatch(updateCurrentVideo(videos[0] as VideoResult)) : null;
            return dispatch(updateVideoList(videos as VideoResult[]));
        }
        catch(err) {
            throw new Error(`Error retrieving videos from YouTube API: ${err}`);
        }
    };
};
