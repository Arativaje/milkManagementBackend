const societyRepository = require('../repository/society.repository')

class societyController{

    getSociety(req,res){
        societyRepository.getSociety().then(output=>{
            res.send(output);
        });
    }
    addSociety(req,res){
        let society = req.body;
        societyRepository.addSociety(society).then(output=>{
            res.send(output);
        });
    }
    updateSociety(req,res){
        let id = req.params.id;
        let society = req.body;
        societyRepository.updateSociety(id,society).then(output=>{
            res.send(output);
        });
    }
    deleteSociety(req,res){
        let id = req.params.id;
        societyRepository.deleteSociety(id).then(output=>{
            res.send(output);
        });

    }
    getSocietyById(req,res){
        let id = req.params.id;
        societyRepository.getSocietyById(id).then(output=>{
            res.send(output);
        });

    }

}

module.exports = new societyController();








