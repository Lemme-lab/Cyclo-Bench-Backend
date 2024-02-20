import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import routerSensorData from './routes/SensorDataRouter.js';
import routerControll from './routes/ControllStateRouter.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/Data', routerSensorData);

app.use('/Controll', routerControll);

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App Connected to Database');
        console.log('MongoDB URL:', mongoDBURL);
        console.log('On Port:', PORT);
        app.listen(PORT, '0.0.0.0', () => {
            console.log("App is listening");
            console.log("Server started at:", new Date().toLocaleString());
        });
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

