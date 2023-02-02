"use strict";
const execLength = require('./exec');
function convert(value, baseUnit, toConvert) {
    const measurementUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const baseIndex = measurementUnits.indexOf(baseUnit);
    const convertIndex = measurementUnits.indexOf(toConvert);
    const exponent = convertIndex - baseIndex;
    return value * (Math.pow(10, exponent));
}
execLength(convert);
