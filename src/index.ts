import express from 'express';

import { Logger } from './modules/logger';
import { Stringify } from './modules/stringify/stringify'

const app: express.Express = express();
const hostname: string = 'localhost';
const port: number = 4200;

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello World!'))

app.listen(port, hostname, () => { 
  // для проверки работы импортов
  Logger.logger('my server with ts starting...');
  console.log(Stringify.toString({ first: 'first' }));
});
