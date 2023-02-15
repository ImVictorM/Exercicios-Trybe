export interface IVehicle {
  drive(): void;
}

export interface IFuturisticVehicle extends IVehicle {
  fly(): void;
}
