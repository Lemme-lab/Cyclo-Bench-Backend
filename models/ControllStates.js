import mongoose from 'mongoose';

const controllStates = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    motorRun: {
        type: Boolean,
        required: true,
    },
    direction: {
        type: [Number],  // Change to an array of numbers
        default: [0, 0, 0],  // Add a default value
        required: true,
    },
    setSpeedPercentage: {
        type: Number,
        required: true,
    },
    Wingposition: {
        type: Number,
        required: true,
    },
    maxSpeedPercentage: {
        type: Number,
        required: true,
    },
    testRoutine: [
        {
            type: {
                rotorSpeed: Number,
                wingPosition: Number,
                directionMatrix: [{ type: Number, required: true }],
                time: Number,
            },
            required: true,
        },
    ],
    presets: [
        {
                    type: {
                        id: Number,
                        routine: [
                            {
                                type: {
                                    rotorSpeed: Number,
                                    wingPosition: Number,
                                    directionMatrix: [{ type: Number, required: true }],
                                    time: Number,
                                },
                                required: true,
                            },
                        ]
                    },
                    required: true,
        }
    ],
    setTestRoutine: {
        type: Boolean,
        required: true,
    },
    cageOpen: {
        type: Boolean,
        required: true,
    },
    emergencyShutdown: {
        type: Boolean,
        required: true,
    },
    testBenchConnection: {
        type: Boolean,
        required: true,
    },
    
}, {
    timestamps: true,
});

export const ControllStates = mongoose.model('controllStates', controllStates);