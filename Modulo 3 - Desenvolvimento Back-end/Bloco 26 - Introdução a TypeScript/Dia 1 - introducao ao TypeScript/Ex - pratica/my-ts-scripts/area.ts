function convertArea(value:number, baseUnit:string, unitToConvert:string): number {
  const squareAreaUnits: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const baseIndex = squareAreaUnits.indexOf(baseUnit);
  const toConvertIndex = squareAreaUnits.indexOf(unitToConvert);
  const expoent = toConvertIndex - baseIndex;
  return value * (Math.pow(100, expoent));
}

console.log(convertArea(1, 'km', 'hm'));