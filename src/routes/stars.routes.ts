import { Router } from 'express';

import { startControllers } from '../controllers';

const starsRoutes: Router = Router();

starsRoutes.get('/', startControllers.getAllStart);
starsRoutes.get('/:id', startControllers.getStarById);
starsRoutes.post('/', startControllers.createStar);

export { starsRoutes };
