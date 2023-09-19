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
  const dataNew = req.body;

  const newStar = {
    id: newId,
    ...dataNew,
  };

  try {
    starsData.push(newStar);
    res.status(201).json(newStar);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllStart, getStarById, createStar };
