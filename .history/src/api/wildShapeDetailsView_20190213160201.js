const axios = require('axios');

async function getWildShapeDetails(request) {
    const { id } = request.params;
    const url = `http://dnd5eapi.co/api/monsters/${id}/`;

    const beastDetails = await axios.get(url);
    return beastDetails.data;
}

module.exports = getWildShapeDetails;