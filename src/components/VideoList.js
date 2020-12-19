import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import store from './../store/store.js';
import { connect } from 'react-redux';

var VideoList = ({handleVideoListEntryTitleClick, videos}) => {
  // let videos = store.getState().videos;

  return (
    <div className="video-list">
      {
        videos.map(video => (
          <VideoListEntry
            key={video.etag}
            video={video}
            handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
          />
        ))
      }
    </div>
  )
};

// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(VideoList);
