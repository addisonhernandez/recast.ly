import exampleVideoData from '../../../src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // set state to the currently selected video
    this.state = {
      videoIndex: 0
    };
    //this.state({videoIndex: this[index?]}) set state to index on click
    //this.setState({videoIndex: indexOf(click id index?)})
    // how to change state on the dig down without modifying to class?
  }

  handleTitleClick(index) {
    console.log('title clicked.', index);
    this.setState({
      videoIndex: index
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* pass in something from state into VideoPlayer */}
            <VideoPlayer video={exampleVideoData[this.state.videoIndex]} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={exampleVideoData}
              titleClick={(index) => this.handleTitleClick(index)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
