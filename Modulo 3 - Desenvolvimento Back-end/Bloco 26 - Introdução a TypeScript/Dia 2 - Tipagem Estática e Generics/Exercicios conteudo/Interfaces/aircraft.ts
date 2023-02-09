interface Aircraft {
  model: string,
  brand: string,
  year: Date,
  owner: string,
  takeOff(): void,
  land(): void,
}