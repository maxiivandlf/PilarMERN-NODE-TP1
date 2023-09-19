import starsData from '../config/dbStars.json';
import { Request, Response } from 'express';

const getAllStart = async (req: Request, res: Response) => {
  try {
    if (starsData.length == 0) {
      res.status(404).json({ message: 'No stars found' });
    }
    res.status(200).json(starsData);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getStarById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const starFined = starsData.find((star) => star.id.toString() === id);
    if (!starFined) {
      res.status(404).json({ message: 'No star found' });
    }
    res.status(200).json(starFined);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const createStar = async (req: Request, res: Response) => {
  const length = starsData.length;
  const newId = starsData[length - 1].id + 1;
  const {
    id,
    name,
    type,
    distancia,
    mass,
    radius,
    temperature,
    luminosity,
    age,
    stellar_history,
  } = req.body;

  const { hydrogen, helium, otros_elementos } = req.body.composition;

  const newStar = {
    id: newId,
    name,
    type,
    distancia,
    mass,
    radius,
    temperature,
    luminosity,
    age,
    composition: {
      hydrogen,
      helium,
      otros_elementos,
    },
    stellar_history,
  };

  try {
    if (
      !name ||
      !type ||
      !distancia ||
      !mass ||
      !radius ||
      !temperature ||
      !luminosity ||
      !age ||
      !hydrogen ||
      !helium ||
      !otros_elementos ||
      !stellar_history
    ) {
      res.status(400).json({ message: 'Missing data' });
      return;
    }
    if (starsData.find((star) => star.name === name)) {
      res.status(403).json({ message: 'Star already exists' });
      return;
    }
    if (starsData.find((star) => star.id === id)) {
      res.status(400).json({ message: 'Star already exists' });
      return;
    }
    starsData.push(newStar);
    res.status(201).json(newStar);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllStart, getStarById, createStar };
