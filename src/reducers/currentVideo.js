import Redux from 'redux';
import preloadedData from './../data/exampleVideoData.js';

var currentVideoReducer = (state = preloadedData.currentVideo, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'currentVideo') {
    return {
      currentVideo: action.payload
    }
  }

  return state;
};

export default currentVideoReducer;
