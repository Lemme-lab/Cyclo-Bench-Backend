import express, {
    request
} from "express"
import {
    PORT,
    mongoDBURL
} from "./config.js";
import mongoose from "mongoose";
import routerSensorData from './routes/SensorDataRouter.js';
import routerControll from './routes/ControllStateRouter.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/Data', routerSensorData);

app.use('/Controll', routerControll);





mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App Connected to Database');
        console.log('On Port: ' + PORT);
        app.listen(PORT,  () => {
            console.log("App is listening")
        });
    }).catch((error) => {
        console.log(error);
    })