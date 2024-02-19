import express from 'express';
import {
    SetSpeed,
    SetSpeedPercentage,
    RotorSpeed,
    Torque,
    Thrust,
    WingPosition,
    MotorSpeed
} from '../models/SensorData.js'

const routerSensorData = express.Router();

routerSensorData.post('/setSensorData/Speed', async (request, response) => {
    try {
        if (!request.body.setSpeed) {
            return response.status(400).send({
                message: 'Send the required "setSpeed" field',
            });
        }
        if (!Number.isInteger(request.body.setSpeed)) {
            return response.status(400).send({
                message: '"setSpeed" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }
        const setSpeed = {
            setSpeed: request.body.setSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };


        const newsetSpeed = await SetSpeed.create(setSpeed);

        return response.status(201).send(newsetSpeed);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/SpeedPercentage', async (request, response) => {
    try {
        if (!request.body.setSpeedPercentage) {
            return response.status(400).send({
                message: 'Send the required "setSpeedPercentage" field',
            });
        }
        if (!Number.isInteger(request.body.setSpeedPercentage)) {
            return response.status(400).send({
                message: '"setSpeedPercentage" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }

        const setSpeedPercentage = {
            setSpeedPercentage: request.body.setSpeedPercentage,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };


        const newsetSpeedPercentage = await SetSpeedPercentage.create(setSpeedPercentage);

        return response.status(201).send(newsetSpeedPercentage);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/motorSpeed', async (request, response) => {
    try {
        if (!request.body.motorSpeed) {
            return response.status(400).send({
                message: 'Send the required "motorSpeed" field',
            });
        }
        if (!Number.isInteger(request.body.motorSpeed)) {
            return response.status(400).send({
                message: '"rotorSpeed" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }

        const motorSpeed = {
            motorSpeed: request.body.motorSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newmotorSpeed = await MotorSpeed.create(motorSpeed);

        return response.status(201).send(newmotorSpeed);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/rotorSpeed', async (request, response) => {
    try {
        if (!request.body.rotorSpeed) {
            return response.status(400).send({
                message: 'Send the required "rotorSpeed" field',
            });
        }
        if (!Number.isInteger(request.body.rotorSpeed)) {
            return response.status(400).send({
                message: '"rotorSpeed" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }

        const rotorSpeed = {
            rotorSpeed: request.body.rotorSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newrotorSpeed = await RotorSpeed.create(rotorSpeed);

        return response.status(201).send(newrotorSpeed);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/torque', async (request, response) => {
    try {

        console.log("Getting Torgue Data");
        console.log("Torgue: " + request.body.torque);
        console.log("TimeStampManual: " + request.body.timeStampManual);
        console.log("ManualID: " + request.body.id);

        var value = request.body.torque;

       if (!request.body.torque) {
            return response.status(400).send({
                message: 'Send the required "Torgue" field',
            });
        }
        if (!Number.isInteger(request.body.torque)) {
            return response.status(400).send({
                message: '"torque" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }
        
        const torque = {
            torque: request.body.torque,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newtorque = await Torque.create(torque);

        return response.status(201).send(newtorque);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/thrust', async (request, response) => {
    try {

        if (!request.body.thrust) {
            return response.status(400).send({
                message: 'Send the required "thrust" field',
            });
        }
        if (!Array.isArray(request.body.thrust) || request.body.thrust.length !== 3) {
            return response.status(400).send({
                message: '"thrust" must be a 3-value integer array',
            });
        }
        
        for (const value of request.body.thrust) {
            if (!Number.isInteger(value)) {
                return response.status(400).send({
                    message: 'All elements in "thrust" must be integers',
                });
            }
        }
        
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }

        const thrust = {
            thrust: request.body.thrust,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        console.log("Object: " + thrust);

        const newthrust = await Thrust.create(thrust);

        console.log("Crack_end");

        return response.status(201).send(newthrust);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.post('/setSensorData/wingPosition', async (request, response) => {
    try {
       
        if (!request.body.wingPosition) {
            return response.status(400).send({
                message: 'Send the required "wingPosition" field',
            });
        }
        if (!Number.isInteger(request.body.wingPosition)) {
            return response.status(400).send({
                message: '"wingPosition" must be an integer',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: '"timestamp" must be an integer',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Send the required "id" field',
            });
        }

        const wingPosition = {
            wingPosition: request.body.wingPosition,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newSwingPosition = await WingPosition.create(wingPosition);

        return response.status(201).send(newSwingPosition);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/Speeds', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 50; // Default to 10 results if count is not provided
        const setSpeedData = await SetSpeed.find().limit(count);
        return response.status(200).send(setSpeedData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/SpeedPercentages', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const setSpeedPercentageData = await SetSpeedPercentage.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(setSpeedPercentageData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/motorSpeeds', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const motorSpeedData = await MotorSpeed.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(motorSpeedData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/rotorSpeeds', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const rotorSpeedData = await RotorSpeed.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(rotorSpeedData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/torques', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const torqueData = await Torque.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(torqueData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/thrusts', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const thrustData = await Thrust.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(thrustData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/wingPositions', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100;
        const wingPositionData = await WingPosition.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(wingPositionData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});

routerSensorData.get('/getSensorData/getAllData', async (request, response) => {
    try {
        const count = parseInt(request.query.count) || 100; 
        const setSpeedData = await SetSpeed.find().sort({ _id: -1 }).limit(count);
        const setSpeedPercentageData = await SetSpeedPercentage.find().sort({ _id: -1 }).limit(count);
        const rotorSpeedData = await RotorSpeed.find().sort({ _id: -1 }).limit(count);
        const torqueData = await Torque.find().sort({ _id: -1 }).limit(count);
        const thrustData = await Thrust.find().sort({ _id: -1 }).limit(count);
        const wingPositionData = await WingPosition.find().sort({ _id: -1 }).limit(count);

        const allData = {
            setSpeedData,
            setSpeedPercentageData,
            rotorSpeedData,
            torqueData,
            thrustData,
            wingPositionData
        };

        return response.status(200).send(allData);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({
            message: error.message
        });
    }
});



export default routerSensorData;