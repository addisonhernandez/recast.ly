import exampleVideoData from '../../../src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoDetails from './VideoDetails.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // set state to the currently selected video
    this.state = {
      videoIndex: 0,
      videos: exampleVideoData,
    };
  }

  /**
   * Click event handler for clicking on a video title
   * @param {Number} index
   */

  handleTitleClick(index) { // innerHTML = "Awesome Food Compilation | Tasty Food Videos! #7"
    this.setState({
      videoIndex: index
    });
  }

  /**
   * Click event handler for the search bar component
   * @param {String} query
   */
  handleSearchSubmit(query) {
    // search: props.searchYouTube(query, callback)
    const debouncedSearch = _.debounce((data) => {
      // update state
      // - completely replace videos
      // - set index to 0
      if (data && data.length) {
        this.setState({
          videoIndex: 0,
          videos: data
        });
      }

    }, 500);

    this.props.search(query, data => debouncedSearch(data));
  }

  componentDidMount() {
    this.handleSearchSubmit('good food');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchSubmit={(query) => this.handleSearchSubmit(query)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.videoIndex]} />
            <VideoDetails video={this.state.videos[this.state.videoIndex]}/>
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
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
