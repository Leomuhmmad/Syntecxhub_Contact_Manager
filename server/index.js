// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/db.js';
import { Router } from './routes/routes.js';

dotenv.config({ path: "./config/.env" });

const app = express();


app.use(express.json());


app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use('/contactmsyt', Router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
