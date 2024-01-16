import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import routerSensorData from './routes/SensorDataRouter.js';
import routerControll from './routes/ControllStateRouter.js';

const app = express();

// Use CORS middleware with specific options
const corsOptions = {
  origin: 'http://localhost:3333', // replace with your actual frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/Data', routerSensorData);
app.use('/Controll', routerControll);

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App Connected to Database');
    console.log('On Port: ' + PORT);
    app.listen(PORT, () => {
      console.log("App is listening");
    });
  })
  .catch((error) => {
    console.log(error);
  });
