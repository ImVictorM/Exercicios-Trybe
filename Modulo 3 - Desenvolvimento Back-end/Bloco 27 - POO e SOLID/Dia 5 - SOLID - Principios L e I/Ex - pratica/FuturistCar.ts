import { IFuturisticVehicle } from './interface/IVehicle';

export default class FuturisticCar implements IFuturisticVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
