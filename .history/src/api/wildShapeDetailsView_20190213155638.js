const axios = require('axios');

const getWildShapeDetails = (request) => {
    const { id } = request.params;
    const url = `http://dnd5eapi.co/api/monsters/${id}/`;

    return axios.get(url).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

module.exports = getWildShapeDetails;