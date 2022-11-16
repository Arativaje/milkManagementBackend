const express = require('express');
const milkController = require('../controller/milk.controller');

const milkRouter = express.Router();


milkRouter.post('/milk',milkController.addMilk);
milkRouter.get('/milk',milkController.getMilk);
milkRouter.put('/milk',milkController.updateMilk);
milkRouter.delete('/milk/:id',milkController.removeMilk);
milkRouter.get('/milk/:id',milkController.getMilkDetailById);
milkRouter.put('/updateRate',milkController.updateMilkRate);

module.exports =milkRouter;