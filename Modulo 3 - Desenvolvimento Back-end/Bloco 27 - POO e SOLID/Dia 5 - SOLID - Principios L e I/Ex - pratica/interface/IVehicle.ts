export interface IGroundVehicle {
  drive(): void;
}

export interface IAirVehicle {
  fly(): void;
}

export interface IFuturisticVehicle extends IAirVehicle, IGroundVehicle {};
