import express from 'express';
import { ControllStates } from '../models/ControllStates.js'

const routerControll = express.Router();

routerControll.post('/setEmptyControll', async (request, response) => {
  try {
    const newControllStates = new ControllStates({
      id: 1,
      motorRun: false,
      direction: [0, 0, 0],
      setSpeedPercentage: 0,
      maxSpeedPercentage: 0,
      setTestRoutine: false,
      WingPosition: 0,
      testRoutine: [{
          rotorSpeed: 0,
          wingPosition: 0,
          directionMatrix: [0, 0, 0],
          time: 0
        },
        {
          rotorSpeed: 0,
          wingPosition: 0,
          directionMatrix: [0, 0, 0],
          time: 0
        },
      ],
      presets: [{
          id: 1,
          routine: [{
            rotorSpeed: 0,
            wingPosition: 0,
            directionMatrix: [0, 0, 0],
            time: 0,
          }]
        },
        {
          id: 2,
          routine: [{
            rotorSpeed: 0,
            wingPosition: 0,
            directionMatrix: [0, 0, 0],
            time: 0,
          }]
        },
        {
          id: 3,
          routine: [{
            rotorSpeed: 0,
            wingPosition: 0,
            directionMatrix: [0, 0, 0],
            time: 0,
          }]
        },
      ],
      cageOpen: false,
      emergencyShutdown: false,
      testBenchConnection: false,
      lastChanged: 0,
    });

    const result = await newControllStates.save();

    return response.status(201).send({
      message: 'Empty document created successfully',
      createdDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/startMotor', async (request, response) => {
  try {
    const { boolMotor } = request.body;

    console.log("Motor State: " + boolMotor);

    if (boolMotor === undefined) {
      return response.status(400).send({
        message: 'Send Motor bool',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 }, 
      { $set: { motorRun: boolMotor } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Set Motor State successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setDirection', async (request, response) => {
  try {
    const { Direction } = request.body;

    console.log("New Direction: " + Direction);

    if (Direction === undefined || Direction.length !== 3) {
      return response.status(400).send({
        message: 'Send a valid direction array with three numbers',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { direction: Direction } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated Direction successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setSpeedPercentage', async (request, response) => {
  try {
    const { SetSpeedPercentage } = request.body;

    console.log("New Set Speed Percentage: " + SetSpeedPercentage);

    if (SetSpeedPercentage === undefined) {
      return response.status(400).send({
        message: 'Send valid setSpeedPercentage value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { setSpeedPercentage: SetSpeedPercentage } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated setSpeedPercentage successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setMaxSpeedPercentage', async (request, response) => {
  try {
    const { MaxSpeedPercentage } = request.body;

    console.log("New Max Speed Percentage: " + MaxSpeedPercentage);

    if (MaxSpeedPercentage === undefined) {
      return response.status(400).send({
        message: 'Send valid maxSpeedPercentage value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { maxSpeedPercentage: MaxSpeedPercentage } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated maxSpeedPercentage successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setWingposition', async (request, response) => {
  try {
    const { WingPosition } = request.body;

    console.log("New Wingposition: " + WingPosition);

    if (WingPosition === undefined) {
      return response.status(400).send({
        message: 'Send valid Wingposition value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { WingPosition: WingPosition } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated SetWingposition successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setTestRoutine', async (request, response) => {
  try {
    const { TestRoutine } = request.body;

    console.log("New Test Routine: " + TestRoutine);

    if (TestRoutine === undefined) {
      return response.status(400).send({
        message: 'Send valid testRoutine value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { testRoutine: TestRoutine } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated testRoutine successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setCageOpen', async (request, response) => {
  try {
    const { CageOpen } = request.body;

    console.log("New Cage Open state: " + CageOpen);

    if (CageOpen === undefined) {
      return response.status(400).send({
        message: 'Send valid cageOpen value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { cageOpen: CageOpen } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated cageOpen successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setEmergencyShutdown', async (request, response) => {
  try {
    const { EmergencyShutdown } = request.body;

    console.log("New Emergency Shutdown state: " + EmergencyShutdown);

    if (EmergencyShutdown === undefined) {
      return response.status(400).send({
        message: 'Send valid emergencyShutdown value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { emergencyShutdown: EmergencyShutdown } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated emergencyShutdown successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.put('/setTestBenchConnection', async (request, response) => {
  try {
    const { TestBenchConnection } = request.body;

    console.log("New Test Bench Connection state: " + TestBenchConnection);

    if (TestBenchConnection === undefined) {
      return response.status(400).send({
        message: 'Send valid testBenchConnection value',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1 },
      { $set: { testBenchConnection: TestBenchConnection } },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: 'Something went horribly wrong'
      });
    }

    return response.status(200).send({
      message: 'Updated testBenchConnection successfully',
      updatedDocument: result
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getMotorRun', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });
    
    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      motorRun: result.motorRun
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getSetSpeedPercentage', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      setSpeedPercentage: result.setSpeedPercentage
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getMaxSpeedPercentage', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      maxSpeedPercentage: result.maxSpeedPercentage
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getTestRoutine', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      testRoutine: result.testRoutine
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getCageOpen', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      cageOpen: result.cageOpen
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getEmergencyShutdown', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      emergencyShutdown: result.emergencyShutdown
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getTestBenchConnection', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      testBenchConnection: result.testBenchConnection
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getControllParametes', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      parameters: result.toObject(),
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getWingposition', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 });

    if (!result) {
      return response.status(404).json({
        message: 'Document not found'
      });
    }

    return response.status(200).send({
      WingPosition: result.WingPosition
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message
    });
  }
});

routerControll.get('/getAllPresets', async (request, response) => {
  try {
    const result = await ControllStates.findOne({ id: 1 }, 'presets');

    if (!result) {
      return response.status(404).json({
        message: 'Presets not found',
      });
    }

    return response.status(200).send({
      message: 'Retrieved all presets successfully',
      presets: result.presets,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

routerControll.put('/addRoutine', async (request, response) => {
  try {
    const { id, routine } = request.body;

    console.log(`Adding Routine to Preset with id ${id}`);

    if (!id || !routine || !Array.isArray(routine) || routine.length === 0) {
      return response.status(400).send({
        message: 'Send a valid preset id and an array of routines in the request body',
      });
    }

    const result = await ControllStates.findOneAndUpdate(
      { id: 1, 'presets.id': id },
      {
        $set: {
          'presets.$.routine': routine,
        },
      },
      { new: true }
    );

    if (!result) {
      return response.status(404).json({
        message: `Preset with id ${id} not found`,
      });
    }

    return response.status(200).send({
      message: `Added Routine to Preset with id ${id} successfully`,
      updatedDocument: result,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      message: error.message,
    });
  }
});

export default routerControll;
