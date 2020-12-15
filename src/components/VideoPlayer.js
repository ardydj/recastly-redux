import React from 'react';
import store from './../store/store.js';

var VideoPlayer = () => {
  let state = store.getState();
  console.log(state);
  let { currentVideo } = state;

  console.log('currentVideo: ', currentVideo)
  if (currentVideo === undefined) {
    return (
      <div className="video-player">Please wait...</div>
    )
  } else {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{currentVideo.snippet.title}</h3>
          <div>{currentVideo.snippet.description}</div>
        </div>
      </div>
    )
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoPlayer.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

export default VideoPlayer;
