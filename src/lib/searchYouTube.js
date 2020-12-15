import API_KEY from './../config/youtube.js';

const getYouTubeVideos = (query) => {
  var options = {
    key: API_KEY,
    query: query
  };
  return (dispatch) => {
    (searchYouTube(options, (videos) => {
    return {
      type: 'Fetched Data',
      payload: videos
    };
  }))};
}

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      // console.log(items);
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default getYouTubeVideos;
