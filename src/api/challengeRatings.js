export const CR_ONE_EIGHTH = '1/8';
export const CR_ONE_QUARTER = '1/4';
export const CR_ONE_HALF = '1/2';

export const getChallengeRatingsForLevel = (druidLevel, isCircleOfTheMoon = false) => {
    if (druidLevel < 2) {
        return [];
    }
    if (isCircleOfTheMoon) {
        const base = ['0', CR_ONE_EIGHTH, CR_ONE_QUARTER, CR_ONE_HALF, '1'];
        const maxCR = druidLevel > 3 ? druidLevel / 3 : 1;
        for(let i=2;  i <= maxCR; i++) {
            base.push(i);
        }
        return base;
    }
    if (druidLevel < 4) {
        return ['0', CR_ONE_EIGHTH, CR_ONE_QUARTER];
    }
    if (druidLevel < 8)
        return ['0', CR_ONE_EIGHTH, CR_ONE_QUARTER, CR_ONE_HALF];
    return ['0', CR_ONE_EIGHTH, CR_ONE_QUARTER, CR_ONE_HALF, '1']
};