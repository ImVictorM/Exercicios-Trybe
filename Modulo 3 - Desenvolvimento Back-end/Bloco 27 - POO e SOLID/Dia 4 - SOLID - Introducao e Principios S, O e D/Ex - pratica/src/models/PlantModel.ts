import fs from 'fs/promises';
import { IModel } from './interfaces/IModel';
import IPlant from './interfaces/IPlant';

interface IOpsInfo {
  createdPlants: number
}

class PlantModel implements IModel<IPlant> {
  private plantsFilePath: string;

  private opsFilePath: string;

  constructor(plantsFilePath: string, opsFilePath: string) {
    this.plantsFilePath = plantsFilePath;
    this.opsFilePath = opsFilePath;
  }

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.opsFilePath, { encoding: 'utf8' });
    const opsInfo: IOpsInfo = JSON.parse(dataRaw);
    opsInfo.createdPlants += incrementAmount;

    await fs.writeFile(this.opsFilePath, JSON.stringify(opsInfo, null, 2));
    return opsInfo.createdPlants;
  }

  async getAll(): Promise<IPlant[]> {
    const rawData = await fs.readFile(this.plantsFilePath, 'utf-8');
    const plants: IPlant[] = JSON.parse(rawData);
    return plants;
  }

  getById(id: string): Promise<IPlant | null> {
    throw new Error('Method not implemented.');
  }

  async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const dataRaw = await fs.readFile(this.plantsFilePath, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(dataRaw);

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFilePath, JSON.stringify(plants, null, 2));
    return newPlant;
  }

  update(arg: IPlant): Promise<IPlant> {
    throw new Error('Method not implemented.');
  }

  removeById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default PlantModel;
