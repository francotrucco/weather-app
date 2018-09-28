const axios = require('axios');

const getWeather = async (lat, lng) => {
    let response = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=682bcc02f57b80319cc477d6938898a3`);

    return response.data.main.temp;
}

module.exports = {
    getWeather
}