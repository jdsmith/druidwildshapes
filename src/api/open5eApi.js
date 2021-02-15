import axios from 'axios';

const OPEN_5E_URL = 'https://api.open5e.com/monsters';

export const getWildShapes = async (challengeRating) => {
    const { data: { results } } = await axios.get(OPEN_5E_URL, {
        params: {
            challenge_rating: challengeRating,
            type: 'beast',
        }
    });

    return results;
};

export const getWildShapeDetails = async (slug) => {
    const url = `${OPEN_5E_URL}/${slug}/`;
    const { data } = await axios.get(url);
    return data;
};
