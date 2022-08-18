import express from 'express';
import { APP_PORT } from './config';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());

import routes from './routes';
app.use('/api', routes);

app.use(errorHandler);
// () => console.log....... this is taking call back
app.listen(APP_PORT, () => console.log(`Listening on Port ${APP_PORT}`));