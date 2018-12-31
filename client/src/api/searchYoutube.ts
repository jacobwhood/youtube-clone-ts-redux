// use as networking file --> send out network requests needed by client from server
import axios, { AxiosRequestConfig } from 'axios';

import { VideoResult } from '../types/types';
import { buildYoutubeSearchResultArray } from '../lib/index';

/**
 * Search YouTube API for videos related to q.
 * Will update Redux store with resulting list of videos.
 * @param q search term for YouTube API call
 */
export const searchYouTube = async (q: string): Promise<VideoResult[] | void> => {
  let options: AxiosRequestConfig = {
    params: { query: q }
  };

  return await axios.get('api/videos/search', options)
    .then( ({ data }) => {
      return buildYoutubeSearchResultArray(data.items);
    })
    .catch(console.log);
};
