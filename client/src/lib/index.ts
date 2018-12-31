import { VideoResult } from '../types/types';

export const buildYoutubeSearchResultArray = (rawJSONObjects: any[]): VideoResult[] => {
  let newVideoResultObjects: VideoResult[] = rawJSONObjects.map(searchResult => {
    return {
      title: searchResult.snippet.title,
      description: searchResult.snippet.description,
      thumbnail_url: searchResult.snippet.thumbnails.default.url,
      videoId: searchResult.id.videoId
    };
  });

  return newVideoResultObjects;
};
