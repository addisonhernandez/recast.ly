import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(<App search={searchYouTube}/>, document.getElementById('app'));