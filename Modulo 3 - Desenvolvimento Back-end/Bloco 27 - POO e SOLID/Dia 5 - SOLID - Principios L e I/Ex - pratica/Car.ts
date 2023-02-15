import { IVehicle } from './interface/IVehicle';

export default class Car implements IVehicle {
  drive(): void {
    console.log('Driving a regular car');
  }
}