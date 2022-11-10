const typeRepository = require('../repository/type.repository');

class TypeController{
    getType(req,res){
        typeRepository.getType().then(output => {
            res.send(output);
        });
    }
    addType(req, res){
        let type = req.body;
        typeRepository.addType(type).then(output =>{
            res.send(output);
        });
    }
    updateType(req, res){
        let id = req.params.id;
        let type = req.body;
        typeRepository.updateType(id,type).then(output =>{
            res.send(output);
        });
    }
    deleteType(req,res){
        let id = req.params.id;
        typeRepository.deleteType(id).then(output =>{
            res.send(output);
        });
    }
    getTypeById(req,res){
        let id= req.params.id;
        typeRepository.getTypeById(id).then(output => {
            res.send(output);
        });
    }
}
module.exports = new TypeController();