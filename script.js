$(document).ready(function() {
console.log('ready!')
// This is our API key stored in a config file ignored so it does not get in version control 
var APIKey = config.GoogleAPIKey

// Here we are building the URL we need to query the database
var queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cats&key=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    // console.log(response);
    var videoId = response.items[0].id.videoId
    console.log(videoId)

    var youTubeVideoURL = `https://www.youtube.com/watch?v=${videoId}`

  console.log(youTubeVideoURL)

    // Transfer content to HTML

    $("#display-div").html(`<a href=${youTubeVideoURL}> Youtube Link Generated form API</a>`);
  });
})