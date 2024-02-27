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

function startServer() {
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
            if (error.code === 'EADDRINUSE') {
                console.log(`Port ${PORT} is already in use, retrying in 1 second...`);
                setTimeout(() => {
                    startServer();
                }, 1000);
            } else {
                console.error('Error connecting to MongoDB:', error);
            }
        });
}

startServer();

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
