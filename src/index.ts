import express from 'express';
import { getHelloMessage } from './utils';

const app = express();

export const sayHello = (req, res) => {
  res.status(200).json({
    message: getHelloMessage(),
    uptime: process.uptime()
  });
};

app.use('/', sayHello);

const port = 3001;
app.listen(port, () => {
  console.log('🚀 Running at localhost:3001');
});
