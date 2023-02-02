function convert(value: number, baseUnit: string, toConvert: string): number {
  const measurementUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const baseIndex = measurementUnits.indexOf(baseUnit);
  const convertIndex = measurementUnits.indexOf(toConvert);
  const exponent = convertIndex - baseIndex;

  return value * (Math.pow(10, exponent));
}

console.log(convert(6, 'm', 'm'));
