//put the API endpoint URL in a variable
//call the fetch request to that API to retrieve the data we're looking for
//the data we're looking for from the NASA APS is: the facilites name, location, (city, state, country)


//we want to pass the location from the first API into the second api
//the weather API takes in the city and country as the parameters to search for the weather in a location
//
// var apiUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json";
//
//
// fetch(apiUrl)
//   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//   .then(response => {
//   response.forEach(function(e){
//     getWeather(e.center, e.city, e.state)
//   })
//
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//       // alert("sorry, there are no results for your search")
//   });
//
// function getWeather(center, city, state){
//   let location = city + ',US'
//   let location2 = city + ", " + state
//   let apiKey= '0dd95279585fa816e64ce0646d398eb2'
//   let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=imperial"
//
//   console.log(apiURL)
//
//
//   fetch(apiURL)
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//
//       console.log(response)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         // alert("sorry, there are no results for your search")
//     });
//
//
//
// }
getLocal();
function getLocal() {
  var apiUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json";
  fetch(apiUrl)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.forEach(function(e) {
        getWeather(e.center, e.city, e.state);
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
      // alert("sorry, there are no results for your search")
    });
}
function getWeather(center, city, state) {
  let location = city + ",US";
  let location2 = city + ", " + state;
  let apiKey = "f1bc4d248bae066ff924465ffe321195";
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey +
    "&units=imperial";

  console.log(apiURL);

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let listItem = document.createElement("li");
      document.querySelector("ul").appendChild(listItem);
      listItem.innerHTML =
        center + ", " + location2 + ", " + response.main.temp;
    })
    .catch(err => {
      console.log(`error ${err}`);
      // alert("sorry, there are no results for your search")
    });
}























//
//
// document.querySeletor('form').addEventListener('submit', nasa)
//
// function nasa(e){
//  e.preventDefault()
//  let date = document.querySelector('input').value
//  console.log(date)
//  fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PX6KQodjwM0QXhS5JSHPYRAp7WyPGe8J2ui06hFi`)
//    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//    .then(response => {
//        console.log(response)
//        if(response.media_type == "image"){
//          document.querySelector('img').src = response.hdurl
//        }else{
//          document.querySelector('iframe').src = response.url
//        }
//
//    })
//    .catch(err => {
//        console.log(`error ${err}`)
//        alert("sorry, there are no results for your search")
//    });
// }
