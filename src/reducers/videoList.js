import Redux from 'redux';
import preloadedData from './../data/exampleVideoData.js'

var videoListReducer = (state = preloadedData.videos, action) => {
  //TODO: define a reducer for the videoList field of our state.
  console.log('videoListReducer state and action:', state, action);
  if (action.type === 'Fetched Data') {
    return action.payload;
  }
  return state;
};

export default videoListReducer;
