import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

import store from './../store/store.js';
import handleVideoSearch from './../actions/search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };

  }

  componentDidMount() {
    store.dispatch(handleVideoSearch('Funny cats'));
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  // Shouldcomponentupdate

  handleVideoListEntryTitleClick(video) {
    store.dispatch({
      type: 'currentVideo',
      payload: video
    })
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer />
          </div>
          <div className="col-md-5">
            <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
