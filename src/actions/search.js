import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (query) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: query
  };
  return (dispatch) => {
    (searchYouTube(options, (videos) => {
    dispatch(changeVideoList(videos));
  }))};
};

export default handleVideoSearch;
