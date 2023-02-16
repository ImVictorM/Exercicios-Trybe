import { Request, Response, NextFunction } from 'express';
import IPlant from '../models/interfaces/IPlant';
import PlantService from '../services/PlantService';

class PlantController {
  public service: PlantService = new PlantService();

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { params: { id } } = req;
      const plant = await this.service.getById(id);
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plantFromReq = req.body as IPlant;
      const updatedPlant = await this.service.update(plantFromReq);
      return res.status(200).json(updatedPlant);
    } catch (error) {
      next(error);
    }
  }

  public async removeById(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    try {
      const { id } = req.params;
      const response = await this.service.removeById(id);
      return res.status(200).json({ removed: response });
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;
