import express from 'express';
import { config } from 'dotenv';
import router from './routes/index.routes.js';

//configura dotenv
config();

//declara porta do servidor
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(router);

//resposta
app.listen(port, () => {
    console.log('SERVER INICIADO');
})