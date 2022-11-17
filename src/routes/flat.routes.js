const express = require('express');
const flatController = require('../controller/flat.controller');
const flatRouter = express.Router();

flatRouter.post('/flat',flatController.addFlat);
flatRouter.get('/flat',flatController.getFlat);
flatRouter.get('/flat/:id',flatController.getFlatById);
flatRouter.delete('/flat/:id',flatController.deleteFlat);
flatRouter.put('/flat/:id',flatController.updateFlat);

module.exports = flatRouter;