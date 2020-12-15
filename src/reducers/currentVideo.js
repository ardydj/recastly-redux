import Redux from 'redux';
import preloadedData from './../data/exampleVideoData.js';

var currentVideoReducer = (state = preloadedData.currentVideo, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log('currentVideoReducer state and action:', state, action);
  if (action.type === 'Fetched Data') {
    return action.payload[0];
  } else if (action.type === 'currentVideo') {
    return action.payload
  }
  return state;
};

export default currentVideoReducer;
