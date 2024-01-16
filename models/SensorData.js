import mongoose from 'mongoose';

const setSpeed = new mongoose.Schema({
    setSpeed: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const setSpeedPercentage = new mongoose.Schema({
    setSpeedPercentage: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const motorSpeed = new mongoose.Schema({

    motorSpeed: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }

}, {
    timestamps: true,
});

const rotorSpeed = new mongoose.Schema({

    rotorSpeed: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const torque = new mongoose.Schema({
    torque: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const thrust = new mongoose.Schema({
    thrust: {
        type: [Number],
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

const wingPosition = new mongoose.Schema({
    wingPosition: {
        type: Number,
        required: true,
    },
    timeStampManual: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});


export const SetSpeed = mongoose.model('setSpeed', setSpeed);
export const SetSpeedPercentage = mongoose.model('setSpeedPercentage', setSpeedPercentage);
export const MotorSpeed = mongoose.model('motorSpeed', motorSpeed);
export const RotorSpeed = mongoose.model('rotorSpeed', rotorSpeed);
export const Torque = mongoose.model('torque', torque);
export const Thrust = mongoose.model('thrust', thrust);
export const WingPosition = mongoose.model('wingPosition', wingPosition);