import axios from 'axios';

OPEN_5E_URL = 'https://api.open5e.com/monsters';

export const getWildShapes = async (challengeRating) => {
    const { data } = await axios.get(OPEN_5E_URL, {
        params: {
            challenge_rating: challengeRating,
            type: 'beast',
        }
    });

    return { data };
};
