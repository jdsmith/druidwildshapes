const axios = require('axios');

async function getWildShapeDetails(request) {
    const { id } = request.params;
    const url = `https://api.open5e.com/monsters/${id}/`;
    try {
        const beastDetails = await axios.get(url);
        return beastDetails.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
    
}

module.exports = getWildShapeDetails;