import fs from 'fs/promises';
import { IModel } from './interfaces/IModel';
import IPlant from './interfaces/IPlant';

class PlantModel implements IModel<IPlant> {
  private plantsFilePath: string;

  private opsFilePath: string;

  constructor(plantsFilePath: string, opsFilePath: string) {
    this.plantsFilePath = plantsFilePath;
    this.opsFilePath = opsFilePath;
  }

  async getAll(): Promise<IPlant[]> {
    const rawData = await fs.readFile(this.plantsFilePath, 'utf-8');
    const plants: IPlant[] = JSON.parse(rawData);
    return plants;
  }

  getById(id: string): Promise<IPlant | null> {
    throw new Error('Method not implemented.');
  }

  create(arg: Omit<IPlant, 'id'>): Promise<IPlant> {
    throw new Error('Method not implemented.');
  }

  update(arg: IPlant): Promise<IPlant> {
    throw new Error('Method not implemented.');
  }

  removeById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default PlantModel;
