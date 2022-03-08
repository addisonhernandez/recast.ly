import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
  //  Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
  //  Accept an q string to search for
  //  Make sure all the tests for searchYouTube are passing. You can open the tests with npm test

  // https://www.youtube.com/results?search_query=  + 'search query'

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: ({ q: query }),
    contentType: 'application/json',
    success: callback,
    error: (error) => console.error('Failed to fetch videos', error)
  });
};

export default searchYouTube;

