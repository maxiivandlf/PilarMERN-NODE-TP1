const PORT = 3008;

import express from 'express';
import { starsRoutes } from './routes';

const app = express();

app.use(express.json());
app.use('/stars', starsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
