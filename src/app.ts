import express, { Request, Response } from 'express';
const PORT = 3008;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Hello World!',
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
