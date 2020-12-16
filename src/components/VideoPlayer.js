import React from 'react';
import store from './../store/store.js';
import { connect } from 'react-redux';

var VideoPlayer = () => {
  let currentVideo = store.getState().currentVideo;

  if (currentVideo.videoId === undefined) {
    return (
      <div className="video-player">Please wait...</div>
      )
    } else {
    console.log('currentVideo VideoPlayer: ', currentVideo, currentVideo.id, currentVideo.id.videoId);
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

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(VideoPlayer);
