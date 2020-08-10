//grab store both divs and form inputs in variables
const titleDisplay = document.getElementById("title-display");
const weatherDisplay = document.getElementById("weather-display");
const secondDisplay = document.getElementById('second-display');

let myVideo = document.getElementById('myVideo');
let source = document.createElement('source');
source.setAttribute('src', 'Sunny.mp4');
source.setAttribute('type', 'video/mp4')
myVideo.appendChild(source);

const titleText = document.createElement('h1');
titleDisplay.append(titleText);

const weatherTemp = document.createElement('h2');
weatherDisplay.append(weatherTemp);

const highTemp = document.createElement('h2');
weatherDisplay.append(highTemp);

const feelsLike = document.createElement('h2');
weatherDisplay.append(feelsLike);

const lowTemp = document.createElement('h2');
weatherDisplay.append(lowTemp);

const humidity = document.createElement('h2');
weatherDisplay.append(humidity);

const forcast = document.createElement('h2');
weatherDisplay.append(forcast);

//get all weather data from api call
const getWeather = async (city, country) => {
  try {
    //http request api
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=5d3ba2952069c3dd1e8cd28c12cd4040`);
    console.log(response.data);
    console.log(response.data.name + ",  " + response.data.sys.country);
    titleDisplay.append(titleText);
    titleText.textContent = response.data.name + "," + response.data.sys.country;
    skyChanger = response.data.weather[0].main;
    console.log(skyChanger)
    function backgroundChange() {
      if (skyChanger == "Clouds") {
        myVideo.pause();
        source.setAttribute('src', 'Clouds.mp4')
        myVideo.load();
        myVideo.play();
        document.body.style.color = "black"
      } else if (skyChanger == "Thunerstorm") {
        myVideo.pause();
        source.setAttribute('src', 'Rainy.mp4')
        myVideo.load();
        myVideo.play();
        document.body.style.color = "black"
      }
      else {
        myVideo.pause();
        source.setAttribute('src', 'Sunny.mp4')
        myVideo.load();
        myVideo.play();
        document.body.style.color = "white"
      }
    }
    backgroundChange()
    //get and display weather temperature//
    console.log("Temp: " + response.data.main.temp);
    weatherTemp.textContent = "Temperature is " + response.data.main.temp + "°";

    //get and display feels like temperature//
    console.log("Feels like: " + response.data.main.feels_like);
    feelsLike.textContent = "Feels Like " + response.data.main.feels_like + "°";

    //get and display humidity//
    console.log("Humidity: " + response.data.main.humidity);
    humidity.textContent = "Humidity is " + response.data.main.humidity + "%";

    //get and display high temperature//
    console.log("high temp: " + response.data.main.temp_max);
    highTemp.textContent = "High Temperature is " + response.data.main.temp_max + "°";

    //get and display low temperature//
    console.log("low temp: " + response.data.main.temp_min);
    lowTemp.textContent = "Low Temperature is " + response.data.main.temp_min + "°";

    //get and display weather forcast//
    console.log("forcast: " + response.data.weather[0].description);
    forcast.textContent = "forcast is " + response.data.weather[0].description;

  } catch (error) {
    console.log(`${error}`);
  };
};

//clears all previously search information
function clearPage() {
  weatherTemp.textContent = "";
  feelsLike.textContent = "";
  humidity.textContent = "";
  highTemp.textContent = "";
  lowTemp.textContent = "";
}

//processes input and makes http request
function handleSubmit(e) {
  e.preventDefault();
  let city = document.getElementById("city-input").value;
  let country = document.getElementById("country-input").value;
  clearPage();
  getWeather(city, country);
};


const button = document.querySelector('.btn').addEventListener('click', handleSubmit);//grab button


