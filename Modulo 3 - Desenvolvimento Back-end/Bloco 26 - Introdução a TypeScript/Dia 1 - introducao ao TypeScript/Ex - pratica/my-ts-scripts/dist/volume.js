"use strict";
const execVolume = require('./exec');
function convertVolume(value, baseUnit, unitToConvert) {
    const cubicUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const baseIndex = cubicUnits.indexOf(baseUnit);
    const convertIndex = cubicUnits.indexOf(unitToConvert);
    const exponent = convertIndex - baseIndex;
    return value * (Math.pow(1000, exponent));
}
execVolume(convertVolume);
