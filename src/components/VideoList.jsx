import VideoListEntry from './VideoListEntry.js';

// within VideoList: props is [{}, {}, {}]
// each entry in props is an object representing all the data of a video
var VideoList = (props) => (
  <div className="video-list">
    {/* for each video in props, render a new VideoListEntry */}
    { props.videos.map(currentVideo => <VideoListEntry video={currentVideo} />) }

  </div>

  // return a whole mama jama

  // mapping the greater list
  // all the videos dot whatever . map(alias => video list alias = {alias})
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
