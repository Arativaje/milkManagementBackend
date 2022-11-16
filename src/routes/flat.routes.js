const express = require('express');
const flatController = require('../controller/flat.controller');
const flatRouter = express.Router();

flatRouter.post('/flat',flatController.addFlat);
flatRouter.get('/flat',flatController.getFlat);
flatRouter.delete('/flat/:id',flatController.deleteFlat);

module.exports = flatRouter;