const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const places = require('./places/places');
const weather = require('./weather/weather');


const getInfo = async (direccion) => {
    try {
        let location = await places.getLatLng(direccion);
        let temp = await weather.getWeather(location.lat, location.lng);
    
        return `En ${location.direction} la temperatura es de ${temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima para la direccion ${direccion}`;
    }
    
}

getInfo(argv.direccion)
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });