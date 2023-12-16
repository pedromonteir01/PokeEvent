import express from 'express';
import { config } from 'dotenv';

//configura dotenv
config();

//declara porta do servidor
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

//resposta
app.listen(port, () => {
    console.log('SERVER INICIADO');
})