const druidLevels = require("./druidLevels");
const wildShapes = require("./wildshapes");

const shouldIncludeWildShape = (wildShape, { maxCR, canFly, canSwim }) => {
    if(wildShape.cr > maxCR) {
        return false;
    }
    if(wildShape.canSwim && !canSwim) {
        return false;
    }
    if(wildShape.canFly && !canFly) {
        return false;
    }
    return true;
}

const lookupWildShapesForLevel = (level, isCircleOfTheMoon) => {
    const levelString = level > 8 ? 'level8' : `level${level}`;
    const wildShapeParams = {...druidLevels[levelString]};
    
    if (wildShapeParams) {
        if (isCircleOfTheMoon === 'true' && level > 2) {
            const circleOfTheMoonCR = level / 3
            wildShapeParams.maxCR = circleOfTheMoonCR < 1 ? 1 : circleOfTheMoonCR;
        }
        const filteredWildShapes = wildShapes.filter(wildShape => shouldIncludeWildShape(wildShape, wildShapeParams));
        return filteredWildShapes;
    }
    return [];
};

const getWildShapes = (request) => {
    const { level } = request.params;
    const { isCircleOfTheMoon } = request.query;

    return lookupWildShapesForLevel(level, isCircleOfTheMoon);
};

module.exports = getWildShapes;
