import Redux from 'redux';
import preloadedData from './../data/exampleVideoData.js'

var videoListReducer = (state = preloadedData.videos, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'Fetched Data') {
    return {
      videos: action.payload
    };
  }
  return state;
};

export default videoListReducer;
