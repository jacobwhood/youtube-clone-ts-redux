const youtubeApi = require('googleapis').google.youtube('v3');

/**
 * Search Youtube API for related videos to input query.
 * @param {String} query Search query to pass to API.
 * @param {Function} cb Callback function to execute upon response from API.
 * @returns {Array} Array of up to 10 objects representing related videos. 
 */
module.exports.searchVideos = (query, cb) => {
  const options = {
    key: process.env.YOUTUBE_API_KEY,
    maxResults: 10,
    part: 'snippet',
    q: query,
    type: 'video'
  };

  youtubeApi.search.list(options, (err, response) => {
    if (err) {
      console.log('error retreiving search results from Youtube APi: ', err);
      cb(err);
    } else {
      cb(null, response.data);
    }
  });
};
