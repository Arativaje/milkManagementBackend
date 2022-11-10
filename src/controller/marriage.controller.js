const marriageRepository = require('../repository/marriage.repository');

class MarriageController{

    getMarriage(req,res){
        marriageRepository.getMarriage().then(output => {
            res.send(output);
        });
    }

    addMarriage(req,res){
        let marriage = req.body;
        marriageRepository.addMarriage(marriage).then(output => {
            res.send(output);
        });
    }
    
    updateMarriage(req,res){
        let marriage = req.body;
        let id = req.params.id;
        marriageRepository.updateMarriage(marriage,id).then(output => {
            res.send(output);
        });
    }

    deleteMarriage(req,res){
        let id = req.params.id;
        marriageRepository.deleteMarriage(id).then(output => {
            res.send(output);
        });
    }
}

module.exports = new MarriageController();