const cr = require('./challengeRatings');

const druidLevels = {
    level2: {
        maxCR: cr.CR_ONE_QUARTER
    },
    level3: {
        maxCR: cr.CR_ONE_QUARTER,
    },
    level4: {
        maxCR: cr.CR_ONE_HALF,
        circleOfTheMoonCR: cr.CR_ONE,
        canSwim: true
    },
    level5: {
        maxCR: cr.CR_ONE_HALF,
        canSwim: true
    },
    level6: {
        maxCR: cr.CR_ONE_HALF,
        canSwim: true
    },
    level7: {
        maxCR: cr.CR_ONE_HALF,
        canSwim: true
    },
    level8: {
        maxCR: cr.CR_ONE_HALF,
        canSwim: true,
        canFly: true
    }
}

module.exports = druidLevels;