import { IAirVehicle } from './interface/IVehicle';

export default class Airplane implements IAirVehicle{
  fly(): void {
    console.log('Flying like a bird');
  }
}