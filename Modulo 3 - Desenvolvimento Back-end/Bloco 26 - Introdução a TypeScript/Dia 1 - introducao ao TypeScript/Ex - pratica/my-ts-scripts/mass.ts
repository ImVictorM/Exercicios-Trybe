const execMass = require('./exec');

function convertMass(value:number, baseUnit:string, unitToConvert:string): number {
  const massUnits: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
  const baseIndex: number = massUnits.indexOf(baseUnit);
  const toConvertIndex: number = massUnits.indexOf(unitToConvert);
  const expoent: number = toConvertIndex - baseIndex;
  return value * (Math.pow(10, expoent));
}

execMass(convertMass);
