const axios = require('axios');


const getLatLng = async (direction) => {

    let encondedUrl = encodeURI(direction);

    let response = await axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key= AIzaSyAnsW8pRPRRpjPShRrudBgSaE8NUyxI7Sg`)

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direction}`);
    }

    let location = response.data.results[0].formatted_address;
    let coors = response.data.results[0].geometry.location;

    return {
        direction: location,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLatLng
}