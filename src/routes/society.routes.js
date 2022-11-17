const express = require('express');
const societyController = require('../controller/society.controller');
const societyRouter = express.Router();

societyRouter.get('/society',societyController.getSociety);
societyRouter.post('/society',societyController.addSociety);
societyRouter.put('/society/:id',societyController.updateSociety);
societyRouter.delete('/society/:id',societyController.deleteSociety);
societyRouter.get('/society/:id',societyController.getSocietyById);

module.exports = societyRouter;








