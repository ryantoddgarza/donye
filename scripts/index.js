// geolocation
//

const success = (pos) => {
    const crd = pos.coords;

    window.onload = getWeather(crd.latitude, crd.longitude);
};

const geoLocator = navigator.geolocation.getCurrentPosition(success);

// weathermap api
//

// get the weather from open weather map api
getWeather = (usrLat, usrLon) => {
  const key = '84a3db98d0d8c0cf2b5702f8cd8244a8'
  const units = 'metric';
  const lat = usrLat;
  const lon = usrLon;

  const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  axios.get(url)
    .then((response) => {
      const weatherObj = response.data.list[0].main;

      // success function
      writeWeather(weatherObj)
    })
    .catch(() => console.error(`Could not resolve ${url}`));
}

// write weather info to the dom
const writeWeather = (weather) => {
  // create a new element
  const newEl = (tag) => {
    return document.createElement(tag);
  }

  const parent = document.querySelector('.weatherContainer')

  const temp = newEl('p');
    temp.classList.add('weather__info');
    temp.innerHTML = `Temperature: ${weather.temp} °C`; // grab object info
    parent.appendChild(temp);

  const feelsLike = newEl('p');
    feelsLike.classList.add('weather__info');
    feelsLike.innerHTML = `Feels like: ${weather.feels_like} °C`; // grab object info
    parent.appendChild(feelsLike);

  const humidity = newEl('p');
    humidity.classList.add('weather__info');
    humidity.innerHTML = `Humidity: ${weather.humidity} %`; //grab object info
    parent.appendChild(humidity);
}

// Trump
//

const getTrump = () => {
  const url = 'https://www.tronalddump.io';
  const ext = '/random/quote';
  axios.get(url + ext)
  .then((response) => {
      donQuote(response.data.value)
  })
  .catch(() => console.error (`Could not resolve ${url + ext}`));
}

getTrump();

// write quote
donQuote = (text) => {
  const don = document.querySelector('.tronaldDump');
  don.innerText = text;
}


// kanye
//

const getKanye = () => {
  const url = 'https://api.kanye.rest/'
  axios.get(url)
  .then((response) =>{
      kanyeQuote(response.data.quote);
  })
  .catch(() => console.error (`Could not resolve ${url +ext}`));
}

getKanye();

// write quote
kanyeQuote = (text) => {
  const don = document.querySelector('.kanyeWest');
  don.innerText = text;
}

