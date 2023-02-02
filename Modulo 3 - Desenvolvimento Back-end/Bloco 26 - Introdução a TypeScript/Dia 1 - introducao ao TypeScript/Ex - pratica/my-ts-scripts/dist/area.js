"use strict";
function convertArea(value, baseUnit, unitToConvert) {
    const squareAreaUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const baseIndex = squareAreaUnits.indexOf(baseUnit);
    const toConvertIndex = squareAreaUnits.indexOf(unitToConvert);
    const expoent = toConvertIndex - baseIndex;
    return value * (Math.pow(100, expoent));
}
console.log(convertArea(1, 'km', 'hm'));
