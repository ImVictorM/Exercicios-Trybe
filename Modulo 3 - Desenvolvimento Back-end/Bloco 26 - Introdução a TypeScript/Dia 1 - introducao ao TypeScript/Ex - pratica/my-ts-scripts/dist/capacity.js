"use strict";
const execCapacity = require('./exec');
function convertCapacity(value, baseUnit, unitToConvert) {
    const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    const baseIndex = capacityUnits.indexOf(baseUnit);
    const toConvertIndex = capacityUnits.indexOf(unitToConvert);
    const expoent = toConvertIndex - baseIndex;
    return value * (Math.pow(10, expoent));
}
execCapacity(convertCapacity);
