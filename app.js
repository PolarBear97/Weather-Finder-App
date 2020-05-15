//grab store both divs and form inputs in variables
const titleDisplay = document.getElementById("title-display");
const weatherDisplay = document.getElementById("weather-display");
//const miniDisplay = document.getElementById("mini-display");
//const secondDisplay = document.getElementById('second-display');
const titleText = document.createElement('h1');
titleDisplay.append(titleText);
const weatherTemp = document.createElement('p');
weatherDisplay.append(weatherTemp);
const feelsLike = document.createElement('p');
weatherDisplay.append(feelsLike);
const humidity = document.createElement('p');
weatherDisplay.append(humidity);
const highTemp = document.createElement('p');
weatherDisplay.append(highTemp);
const lowTemp = document.createElement('p');
weatherDisplay.append(lowTemp);

//get all weather data from api call
const getWeather = async (city, country) => {
  try {
    //http request api
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=5d3ba2952069c3dd1e8cd28c12cd4040`);
    console.log(response.data);
    console.log(response.data.name + ",  " + response.data.sys.country);

    titleDisplay.append(titleText);
    titleText.textContent = response.data.name + "," + response.data.sys.country;

    tempMid = response.data.main.temp;
    function backgroundChange() {
      if (tempMid > 50) {
        document.body.style.background = "url('sunset.jpg')";
        document.body.style.color = "black"
      }
    }
    backgroundChange()
    //get and display weather temperature//
    console.log("Temp: " + response.data.main.temp);
    weatherTemp.textContent = "Temperature " + response.data.main.temp + "°";

    //get and display feels like temperature//
    console.log("Feels like: " + response.data.main.feels_like);
    feelsLike.textContent = "Feels Like " + response.data.main.feels_like + "°";

    //get and display humidity//
    console.log("Humidity: " + response.data.main.humidity);
    humidity.textContent = "Humidity " + response.data.main.humidity + "%";

    //get and display high temperature//
    console.log("high temp: " + response.data.main.temp_max);
    highTemp.textContent = "High Temperature " + response.data.main.temp_max + "°";

    //get and display low temperature//
    console.log("low temp: " + response.data.main.temp_min);
    lowTemp.textContent = "Low Temperature " + response.data.main.temp_min + "°";

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
  var city = document.getElementById("city-input").value;
  var country = document.getElementById("country-input").value;
  clearPage();
  getWeather(city, country);
};


const button = document.querySelector('.btn').addEventListener('click', handleSubmit);//grab button


