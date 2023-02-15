import path from 'path';
import { IModel } from '../models/interfaces/IModel';
import IPlant, { INewPlant } from '../models/interfaces/IPlant';
import PlantModel from '../models/PlantModel';
import PlantSubService from './PlantSubService';

class PlantService {
  private model: IModel<IPlant>;

  constructor(model?: IModel<IPlant>) {
    const plantsFile = path.join(__dirname, '..', 'models', 'database', 'plantsData.json');
    const opsFile = path.join(__dirname, '..', 'models', 'database', 'opsInfo.json');
    this.model = model || new PlantModel(plantsFile, opsFile);
  }

  public async getAll(): Promise<IPlant[]> {
    return this.model.getAll();
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const waterFrequency = PlantSubService.calcWaterFrequency(plant);
    PlantSubService.validatePlantAttr(plant);
    const createdPlant = await this.model.create({ waterFrequency, ...plant });
    return createdPlant;
  }
}

export default PlantService;
