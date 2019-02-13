const axios = require('axios');

const getWildShapeDetails = (request) => {
    const { id } = request.params;
    const url = `http://dnd5eapi.co/api/monsters/${id}/`;

    return axios.get(url);
};

module.exports = getWildShapeDetails;