//getElement is a function that grabs the city name property from an endpoint and displays the name to the user
//function getElement () {
//  const cityName = document.createElement('h2');
//  const weatherTemp = document.createElement('current-temp');
//  const weatherBio = document.createElement('weather-description');
//  const highTemp = document.createElement('high-temp');
//  const lowTemp = document.createElement('low-temp');
//  weatherDisplay.append(cityName);
//removeCity();
//}
//getElement();

//function removeCity(){
//  This function should remove the old result when the user searches for a new city.
//}
const getWeather = async () => {
  //try {
  //http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&APPID=c2ed4a9e3e6c47e000cc300c3eeaafd5

  const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=london,uk&units=imperial&APPID=5d3ba2952069c3dd1e8cd28c12cd4040");
  console.log(response.data);
  //const cityName = document.createElement('h2');

  //get and display weather temperature//
  console.log("Temp: " + response.data.main.temp);
  const weatherTemp = document.createElement('p');
  const weatherDisplay = document.getElementById("weather-display");
  weatherDisplay.append(weatherTemp);
  weatherTemp.textContent = "Temperature " + response.data.main.temp;

  ////get and display feels like temperature//
  console.log("Feels like: " + response.data.main.feels_like);
  const feelsLike = document.createElement('p');
  weatherDisplay.append(feelsLike);
  feelsLike.textContent = "Feels Like " + response.data.main.feels_like;

  ////get and display humidity//
  console.log("Humidity: " + response.data.main.humidity);
  const humidity = document.createElement('p');
  weatherDisplay.append(humidity);
  humidity.textContent = "Humidity " + response.data.main.humidity;

  ////get and display high temperature//
  console.log("high temp: " + response.data.main.temp_max);
  const highTemp = document.createElement('p');
  weatherDisplay.append(highTemp);
  highTemp.textContent = "High Temperature " + response.data.main.temp_max;

  ////get and display low temperature//
  console.log("low temp: " + response.data.main.temp_min);
  const lowTemp = document.createElement('p');
  weatherDisplay.append(lowTemp);
  lowTemp.textContent = "Low Temperature " + response.data.main.temp_min;
  //} catch (error) {
  //console.log(`${error}`)
  //}
};
getWeather();

const getWeatherBio = function () {

};

const getCurrentTemp = function () {

};

const getHighTemp = function () {

};

const getLowTemp = function () {

};

const BackGround = function () {

};



