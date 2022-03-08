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



  // $.ajax({
  //   url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
  //   type: 'GET',
  //   data: ({ q: query }),
  //   contentType: 'application/json',
  //   success: callback,
  //   error: (error) => console.error('Failed to fetch videos', error)
  // });

  //========================= Experimental Features ===========================================

  const searchURL = `https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}`;
  const initSettings = {
    method: 'GET',
    headers: {
      Authorization: API_KEY,
      'Content-Type': 'application/json'
    },
  };

  fetch(searchURL, initSettings)
    .then(response => {
      response.json().then(data => callback(data));
    })
    .catch(error => console.error('Fetch failed', error));
};

export default searchYouTube;

/*
fetch('URL' [, init])
  .then(callback)
  .catch(error => console.error('oops', error))

URL: https://www.youtube.com/results?search_query=

init: custom settings object
{
  method: 'GET'
  headers: {
    authorization: API_KEY
  }

}
  // var getData = async function() {
  //   try {
  //     const res = await fetch(`https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}`);
  //     if (!res.ok) {
  //       const message = 'Danger Will Robinson';
  //       throw new Error(message);
  //     }
  //     const data = await res.json();
  //     const result = {
  //       status: res.status + '-' + res.statusText,
  //       headers: {
  //         "content-type": res.headers.get('Content-Type'),
  //         "Content-Length": res.headers.get('Content-Length'),
  //       },
  //       data: data,
  //     }

  //     console.log('result: ', result);
  //   }
  // }

*/

