const execVolume = require('./exec');

function convertVolume(
  value: number,
  baseUnit: string,
  unitToConvert: string
): number {
  const cubicUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const baseIndex = cubicUnits.indexOf(baseUnit);
  const convertIndex = cubicUnits.indexOf(unitToConvert);
  const exponent = convertIndex - baseIndex;

  return value * (Math.pow(1000, exponent));
}

execVolume(convertVolume);
