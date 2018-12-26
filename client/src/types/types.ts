export interface VideoResult {
  videoId: string;
  title: string;
  description: string;
  thumbnail_url: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  currentVideo: VideoResult;
  videos: VideoResult[];
}
