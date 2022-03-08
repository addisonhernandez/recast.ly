import VideoListEntry from './VideoListEntry.js';

// within VideoList: props is [{}, {}, {}]
// each entry in props is an object representing all the data of a video
var VideoList = (props) => {
  return (
    <div className="video-list">
      <button className="autoPlay">Auto Play</button>
      {props.videos.map((currentVideo, index) => (
        <VideoListEntry
          key={currentVideo.etag} // <-- This solved that `key` warning
          titleClick={
            props.titleClick ?
              props.titleClick.bind(this, index) :
              () => {}
          } // <- This added the ability to select a video. Ternary to make sure we pass the mocha tests
          video={currentVideo}
        />
      ))}

    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
