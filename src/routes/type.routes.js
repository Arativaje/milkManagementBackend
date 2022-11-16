const express = require('express');
const typeController = require('../controller/type.controller');
const typeRouter = express.Router();

typeRouter.get('/type',typeController.getType);
typeRouter.get('/type/:id',typeController.getTypeById);
typeRouter.post('/type',typeController.addType);
typeRouter.put('/type/:id',typeController.updateType);
typeRouter.delete('/type/:id',typeController.deleteType);

module.exports = typeRouter;
