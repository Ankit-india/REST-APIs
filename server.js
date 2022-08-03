import express from 'express';
import { APP_PORT } from './config';

const app = express();
// () => console.log....... this is taking call back
app.listen(APP_PORT, () => console.log(`Listening mode on ${APP_PORT}`));