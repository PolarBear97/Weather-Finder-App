//WORKS//
//get all weather data from api call
const getWeather = async (city, country) => {
  try {
    //http request api
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=5d3ba2952069c3dd1e8cd28c12cd4040`);
    console.log(response.data);

    //grab store both divs and form inputs in variables
    const weatherDisplay = document.getElementById("weather-display");
    const miniDisplay = document.getElementById("mini-display");
    const secondDisplay = document.getElementById('second-display');
    console.log(response.data.name + ",  " + response.data.sys.country);
    const titleText = document.createElement('h1');
    weatherDisplay.append(titleText);
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
    const weatherTemp = document.createElement('p');
    miniDisplay.append(weatherTemp);
    weatherTemp.textContent = "Temperature " + response.data.main.temp + "°";


    //get and display feels like temperature//
    console.log("Feels like: " + response.data.main.feels_like);
    const feelsLike = document.createElement('p');
    miniDisplay.append(feelsLike);
    feelsLike.textContent = "Feels Like " + response.data.main.feels_like + "°";

    //get and display humidity//
    console.log("Humidity: " + response.data.main.humidity);
    const humidity = document.createElement('p');
    secondDisplay.append(humidity);
    humidity.textContent = "Humidity " + response.data.main.humidity;

    //get and display high temperature//
    console.log("high temp: " + response.data.main.temp_max);
    const highTemp = document.createElement('p');
    secondDisplay.append(highTemp);
    highTemp.textContent = "High Temperature " + response.data.main.temp_max + "°";

    //get and display low temperature//
    console.log("low temp: " + response.data.main.temp_min);
    const lowTemp = document.createElement('p');
    secondDisplay.append(lowTemp);
    lowTemp.textContent = "Low Temperature " + response.data.main.temp_min + "°";

  } catch (error) {
    console.log(`${error}`);
  };
};



//WORKS//
//processes input and makes http request
function handleSubmit(e) {
  e.preventDefault();
  var city = document.getElementById("city-input").value;
  var country = document.getElementById("country-input").value;
  //document.getElementById("GFG").innerHTML = txt;
  getWeather(city, country);
  //console.log(location.city);
  //console.log(location.country);
};

//WORKS//
const button = document.querySelector('.btn').addEventListener('click', handleSubmit);//grab button


