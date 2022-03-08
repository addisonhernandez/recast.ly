

var VideoDetails = (props) => {
  return (
    <div className="vidDetails">
      <span className="published">Published At: {props.video.snippet.publishedAt}</span>
      <a href={`https://youtube.com/channel/${props.video.snippet.channelId}`}> Channel Name: {props.video.snippet.channelTitle}</a>
    </div>
  );
};

export default VideoDetails;
