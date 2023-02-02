"use strict";
function convertMass(value, baseUnit, unitToConvert) {
    const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    const baseIndex = massUnits.indexOf(baseUnit);
    const toConvertIndex = massUnits.indexOf(unitToConvert);
    const expoent = toConvertIndex - baseIndex;
    return value * (Math.pow(10, expoent));
}
console.log(convertMass(1, 'g', 'mg'));
