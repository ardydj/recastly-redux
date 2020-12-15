import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import store from './../store/store.js';

var VideoList = ({handleVideoListEntryTitleClick}) => {
  let state = store.getState();
  let { videos } = state;
  console.log('videos:', videos)

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

export default VideoList;
