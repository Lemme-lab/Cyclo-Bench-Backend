import express from 'express';
import {
    SetSpeed,
    SetSpeedPercentage,
    RotorSpeed,
    Torque,
    Thrust,
    WingPosition,
    MotorSpeed
} from '../models/SensorData.js';

const routerSensorData = express.Router();

routerSensorData.post('/setSensorData/Speed', async (request, response) => {
    try {
        console.log("Received request to set Speed data...");
        console.log("Speed: " + request.body.setSpeed);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.setSpeed) {
            return response.status(400).send({
                message: 'Please provide the required field: "setSpeed"',
            });
        }
        if (!Number.isInteger(request.body.setSpeed)) {
            return response.status(400).send({
                message: 'Invalid data type for "setSpeed". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }
        const setSpeed = {
            setSpeed: request.body.setSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };
        const newSetSpeed = await SetSpeed.create(setSpeed);
        return response.status(201).send(newSetSpeed);
    } catch (error) {
        console.log("Error encountered while setting Speed data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/SpeedPercentage', async (request, response) => {
    try {
        console.log("Received request to set Speed Percentage data...");
        console.log("Speed Percentage: " + request.body.setSpeedPercentage);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.setSpeedPercentage) {
            return response.status(400).send({
                message: 'Please provide the required field: "setSpeedPercentage"',
            });
        }
        if (!Number.isInteger(request.body.setSpeedPercentage)) {
            return response.status(400).send({
                message: 'Invalid data type for "setSpeedPercentage". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const setSpeedPercentage = {
            setSpeedPercentage: request.body.setSpeedPercentage,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newSetSpeedPercentage = await SetSpeedPercentage.create(setSpeedPercentage);

        return response.status(201).send(newSetSpeedPercentage);
    } catch (error) {
        console.log("Error encountered while setting Speed Percentage data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/motorSpeed', async (request, response) => {
    try {
        console.log("Received request to set Motor Speed data...");
        console.log("Motor Speed: " + request.body.motorSpeed);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.motorSpeed) {
            return response.status(400).send({
                message: 'Please provide the required field: "motorSpeed"',
            });
        }
        if (!Number.isInteger(request.body.motorSpeed)) {
            return response.status(400).send({
                message: 'Invalid data type for "motorSpeed". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const motorSpeed = {
            motorSpeed: request.body.motorSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newMotorSpeed = await MotorSpeed.create(motorSpeed);

        return response.status(201).send(newMotorSpeed);
    } catch (error) {
        console.log("Error encountered while setting Motor Speed data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/rotorSpeed', async (request, response) => {
    try {
        console.log("Received request to set Rotor Speed data...");
        console.log("Rotor Speed: " + request.body.rotorSpeed);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.rotorSpeed) {
            return response.status(400).send({
                message: 'Please provide the required field: "rotorSpeed"',
            });
        }
        if (!Number.isInteger(request.body.rotorSpeed)) {
            return response.status(400).send({
                message: 'Invalid data type for "rotorSpeed". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const rotorSpeed = {
            rotorSpeed: request.body.rotorSpeed,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newRotorSpeed = await RotorSpeed.create(rotorSpeed);

        return response.status(201).send(newRotorSpeed);
    } catch (error) {
        console.log("Error encountered while setting Rotor Speed data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/torque', async (request, response) => {
    try {
        console.log("Received request to set Torque data...");
        console.log("Torque: " + request.body.torque);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.torque) {
            return response.status(400).send({
                message: 'Please provide the required field: "torque"',
            });
        }
        if (!Number.isInteger(request.body.torque)) {
            return response.status(400).send({
                message: 'Invalid data type for "torque". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const torque = {
            torque: request.body.torque,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newTorque = await Torque.create(torque);

        return response.status(201).send(newTorque);
    } catch (error) {
        console.log("Error encountered while setting Torque data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/thrust', async (request, response) => {
    try {
        console.log("Received request to set Thrust data...");
        console.log("Thrust: " + request.body.thrust);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.thrust) {
            return response.status(400).send({
                message: 'Please provide the required field: "thrust"',
            });
        }
        if (!Array.isArray(request.body.thrust) || request.body.thrust.length !== 3) {
            return response.status(400).send({
                message: 'Invalid data type or length for "thrust". It must be a 3-value integer array.',
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
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const thrust = {
            thrust: request.body.thrust,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newThrust = await Thrust.create(thrust);

        return response.status(201).send(newThrust);
    } catch (error) {
        console.log("Error encountered while setting Thrust data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.post('/setSensorData/wingPosition', async (request, response) => {
    try {
        console.log("Received request to set Wing Position data...");
        console.log("Wing Position: " + request.body.wingPosition);
        console.log("Timestamp (Manual): " + request.body.timeStampManual);
        console.log("Manual ID: " + request.body.id);

        if (!request.body.wingPosition) {
            return response.status(400).send({
                message: 'Please provide the required field: "wingPosition"',
            });
        }
        if (!Number.isInteger(request.body.wingPosition)) {
            return response.status(400).send({
                message: 'Invalid data type for "wingPosition". It must be an integer.',
            });
        }
        if (!Number.isInteger(request.body.timeStampManual)) {
            return response.status(400).send({
                message: 'Invalid data type for "timestamp". It must be an integer.',
            });
        }
        if (!request.body.id) {
            return response.status(400).send({
                message: 'Please provide the required field: "id"',
            });
        }

        const wingPosition = {
            wingPosition: request.body.wingPosition,
            timeStampManual: request.body.timeStampManual,
            id: request.body.id,
        };

        const newWingPosition = await WingPosition.create(wingPosition);

        return response.status(201).send(newWingPosition);
    } catch (error) {
        console.log("Error encountered while setting Wing Position data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/Speeds', async (request, response) => {
    try {
        console.log("Retrieving Speeds data...");
        const count = parseInt(request.query.count) || 100; // Default to 100 results if count is not provided
        const setSpeedData = await SetSpeed.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(setSpeedData);
    } catch (error) {
        console.log("Error encountered while retrieving Speeds data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/SpeedPercentages', async (request, response) => {
    try {
        console.log("Retrieving Speed Percentages data...");
        const count = parseInt(request.query.count) || 100;
        const setSpeedPercentageData = await SetSpeedPercentage.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(setSpeedPercentageData);
    } catch (error) {
        console.log("Error encountered while retrieving Speed Percentages data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/motorSpeeds', async (request, response) => {
    try {
        console.log("Retrieving Motor Speeds data...");
        const count = parseInt(request.query.count) || 100;
        const motorSpeedData = await MotorSpeed.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(motorSpeedData);
    } catch (error) {
        console.log("Error encountered while retrieving Motor Speeds data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/rotorSpeeds', async (request, response) => {
    try {
        console.log("Retrieving Rotor Speeds data...");
        const count = parseInt(request.query.count) || 100;
        const rotorSpeedData = await RotorSpeed.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(rotorSpeedData);
    } catch (error) {
        console.log("Error encountered while retrieving Rotor Speeds data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/torques', async (request, response) => {
    try {
        console.log("Retrieving Torques data...");
        const count = parseInt(request.query.count) || 100;
        const torqueData = await Torque.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(torqueData);
    } catch (error) {
        console.log("Error encountered while retrieving Torques data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/thrusts', async (request, response) => {
    try {
        console.log("Retrieving Thrusts data...");
        const count = parseInt(request.query.count) || 100;
        const thrustData = await Thrust.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(thrustData);
    } catch (error) {
        console.log("Error encountered while retrieving Thrusts data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/wingPositions', async (request, response) => {
    try {
        console.log("Retrieving Wing Positions data...");
        const count = parseInt(request.query.count) || 100;
        const wingPositionData = await WingPosition.find().sort({ _id: -1 }).limit(count);
        return response.status(200).send(wingPositionData);
    } catch (error) {
        console.log("Error encountered while retrieving Wing Positions data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

routerSensorData.get('/getSensorData/getAllData', async (request, response) => {
    try {
        console.log("Retrieving all sensor data...");
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
        console.log("Error encountered while retrieving all sensor data: " + error.message);
        response.status(500).send({
            message: 'Internal server error: ' + error.message
        });
    }
});

export default routerSensorData;
