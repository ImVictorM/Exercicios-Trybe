import HttpException from '../exceptions/HttpException';
import { INewPlant } from '../models/interfaces/IPlant';

export default class PlantSubService {
  public static calcWaterFrequency(plant: INewPlant): number {
    const waterFrequency = plant.needsSun
      ? plant.size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (plant.size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    return waterFrequency;
  }

  public static validatePlantAttr(plant: INewPlant): void {
    const {
      breed,
      needsSun,
      origin,
      size,
    } = plant;
    if (typeof breed !== 'string') {
      throw new HttpException(400, 'Attribute "breed" must be string.');
    }

    if (typeof needsSun !== 'boolean') {
      throw new HttpException(400, 'Attribute "needsSun" must be boolean.');
    }

    if (typeof origin !== 'string') {
      throw new HttpException(400, 'Attribute "origin" must be string.');
    }

    if (typeof size !== 'number') {
      throw new HttpException(400, 'Attribute "size" must be number.');
    }
  }
}
