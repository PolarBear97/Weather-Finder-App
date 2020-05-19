# Project Overview

## Project Name

The Weather Finder App

## Project Description

This weather app will ask the user for the town & zip code of the area they want to look up the weather in. If the user doesn't enter any data or enters the incorrect format, they will be presented with an error and asked to provide the correct information. Once the user enters this into the app, they will be presented with the following information:
1. The city name.
2. The current temperature.
3. A description of the weather.
4. The high and low temperatures of the day.
5. the color of the page will change based on the weather conditions of the area the user has looked up.
## API and Data Sample


## Wireframes

Computer Home Screen: 
Tablet Home Screen: 
Phone Home Screen: 

#### MVP 

- Create web page, ensure all elements like images, decks and and text like account balance are all present to the user.
- Ensure that button works as intended and presents the correct information to the user.  
- Insert colors, borders, backgrounds, fonts and sections. Make sure all of it looks professional (like a weather app should).

#### PostMVP  

- Add a world clock.
- Add css animations.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 12| Core HTML/JavaScript functionality(event handler, background and color changer.)| Complete
|May 13| Axios requests/ connecting endpoints (get requests) | Complete
|May 14| styling all elements of page(divs, headers, colors and responsiveness, google fonts)| Complete
|May 15| Try out app again to ensure there are no remaining errors(event handle works, city search works.)| Complete

## Priority Matrix

https://res.cloudinary.com/dmuoew8wf/image/upload/v1589224825/Screen_Shot_2020-05-10_at_1.48.24_PM_zeqero.png
Javascript functionality, axios and testing are all highly prioritized.

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Psuedocode | L | 3hrs| 3 | 3 |
| HTML Structure | L | 4.5hrs| 4 | 4 |
| CSS Design | L | 4hrs| 1 | 1 |
| Javascript | M | 3.5hrs| 3.5 | 3.5 |
| Functionality | M | 5hrs| 5 | 5 |
| Axios & Endpoints | H | 4.5hrs| 10.5 | 10.5 |
| Testing/Debugging | H | 4hrs| 4 | 4 |
| Total |  | 30hrs| ? | ? |

## Code Snippet

tempMid = response.data.main.temp;
    function backgroundChange() {
      if (tempMid > 60) {
        document.body.style.background = "url('sunset.jpg')";
        document.body.style.color = "black"
      }
      else {
        document.body.style.background = "url('cold.jpg')";
        document.body.style.color = "white"
      }
    }
    backgroundChange()
