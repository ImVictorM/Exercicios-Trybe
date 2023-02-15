import { IGroundVehicle } from './interface/IVehicle';

export default class Car implements IGroundVehicle {
  drive(): void {
    console.log('Driving a regular car');
  }
}