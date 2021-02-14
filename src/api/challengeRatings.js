export const CR_ONE_EIGHTH = '1/8';
export const CR_ONE_QUARTER = '1/4';
export const CR_ONE_HALF = '1/2';

export const getChallengeRatingForLevel = (druidLevel) => {
    if (druidLevel < 2) {
        return null;
    }
    if (druidLevel < 4) {
        return CR_ONE_QUARTER;
    }
    if (druidLevel < 8)
        return CR_ONE_HALF;
    return '1'
};

export default ['0', CR_ONE_EIGHTH, CR_ONE_QUARTER, CR_ONE_HALF, '1'];