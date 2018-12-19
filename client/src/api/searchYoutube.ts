// use as networking file --> send out network requests needed by client from server
import axios, { AxiosRequestConfig } from 'axios';

interface YouTubeAPISearchResult {
  videoId: string;
  title: string;
  description: string;
  thumbnail_url: string;
};

/**
 * Search YouTube API for videos related to q.
 * Will update Redux store with resulting list of videos.
 * @param q search term for YouTube API call
 */
export const searchYouTube = (q: string) => {
  let options: AxiosRequestConfig = {
    params: { query: q }
  };

  axios.get('api/videos/search', options)
    .then( ({ data }) => {
      console.log(buildYoutubeSearchResultArray(data.items));
    })
    .catch(console.log);
};

function buildYoutubeSearchResultArray(rawJSONObjects: any[]): YouTubeAPISearchResult[] {
  let results: YouTubeAPISearchResult[] = rawJSONObjects.map(searchResult => {
    return {
      title: searchResult.snippet.title,
      description: searchResult.snippet.description,
      thumbnail_url: searchResult.snippet.thumbnails.default.url,
      videoId: searchResult.id.videoId
    };
  });

  return results;
};