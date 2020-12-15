import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import getYouTubeVideos from './../lib/searchYouTube.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => {
  console.log('Store has dispatched:', store.getState());
})

export default store;