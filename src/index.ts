import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

app.post('/api/v1/parse', (req: Request, res: Response) => {
  const body = req.body;
  if (!body.data) {
    return res.status(400).json({ statusCode: 400, message: 'Data is required field.' });
  }
  const firstNameSplit = '0000';
  const lastNameSplit = '000';
  const firstName = body.data.split(firstNameSplit)[0];
  const lastName = body.data.split(firstNameSplit)[1].split(lastNameSplit)[0];
  const clientId = body.data.split(firstNameSplit)[1].split(lastNameSplit)[1];
  const response = {
    statusCode: 200,
    data: {
      firstName: firstName + firstNameSplit,
      lastName: lastName + lastNameSplit,
      clientId: clientId,
    },
  };
  return res.status(200).json(response);
});

app.post('/api/v2/parse', (req: Request, res: Response) => {
  const body = req.body;
  if (!body.data) {
    return res.status(400).json({ statusCode: 400, message: 'Data is required field.' });
  }
  const firstNameSplit = '0000';
  const lastNameSplit = '000';
  const firstName = body.data.split(firstNameSplit)[0];
  const lastName = body.data.split(firstNameSplit)[1].split(lastNameSplit)[0];
  const clientId = body.data.split(firstNameSplit)[1].split(lastNameSplit)[1];
  const response = {
    statusCode: 200,
    data: {
      firstName: firstName,
      lastName: lastName,
      clientId: clientId.substr(0,3) + '-' + clientId.substr(3),
    },
  };
  return res.status(200).json(response);
});

app.listen(3000, () => {
  console.log('App Running on port 3000....');
});
