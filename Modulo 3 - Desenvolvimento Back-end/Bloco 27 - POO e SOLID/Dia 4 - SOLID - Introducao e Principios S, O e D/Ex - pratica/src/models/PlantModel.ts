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

  public async getAll(): Promise<IPlant[]> {
    const rawData = await fs.readFile(this.plantsFilePath, 'utf-8');
    const plants: IPlant[] = JSON.parse(rawData);
    return plants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();
    const foundPlant = plants.find((plant) => plant.id === Number(id));
    return foundPlant || null;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);

    await fs.writeFile(this.plantsFilePath, JSON.stringify(plants, null, 2));
    return newPlant;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const { id } = plant;
    const plants = await this.getAll();
    const plantToUpdateIndex = plants.findIndex((p) => p.id === id);
    plants.splice(plantToUpdateIndex, 1, plant);
    await fs.writeFile(this.plantsFilePath, JSON.stringify(plants, null, 2));
    const updatedPlant = await this.getById(id.toString());
    return updatedPlant as IPlant;
  }

  public async removeById(id: string): Promise<boolean> {
    const plants = await this.getAll();
    const updatedPlants = plants.filter((plant) => plant.id !== Number(id));

    await fs.writeFile(this.plantsFilePath, JSON.stringify(updatedPlants, null, 2));

    return true;
  }
}

export default PlantModel;
