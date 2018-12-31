import { UPDATE_VIDEO_LIST, UPDATE_CURRENT_VIDEO } from '../actions/actionTypes';
import { VideoResult, Action, State } from '../types/types';
import { defaultData } from '../../../default-data/data';

let defaultCurrentVideo: VideoResult = defaultData[0];
let defaultVideoList: VideoResult[] = defaultData;

let defaultState = {
  currentVideo: defaultCurrentVideo,
  videos: defaultVideoList
};

const reducers = (state: State = defaultState, action: Action): State => {
  switch(action.type) {
    case UPDATE_VIDEO_LIST:
      return {
        ...state,
        videos: action.payload
      };
    case UPDATE_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
