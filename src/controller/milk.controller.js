const milkRepository = require('../repository/milk.repository');
const logger = require('../logger/logger');

class MilkController {
    getMilk(req, res) {
        milkRepository.getMilk().then(output => {
            res.send(output);
        });
    }

    addMilk(req,res) {
        let body = req.body;
        logger.info("Add milk : "+body);
        milkRepository.addMilk(body).then(output => {

            res.send(output);
        }).catch(err=>{
            res.send(err);
        });
    }

    updateMilk(req,res) {
        let body = req.body;
        milkRepository.updateMilk(body).then(output => {
            res.send(output);
        });
    }

    removeMilk(req,res) {
        let id = req.params.id;
        milkRepository.removeMilk(id).then(output => {
            res.send(output);
        });
    }

    removeMilkByType(req,res){
        let type = req.params.ty;
        milkRepository.removeMilkByType(type).then(output => {
            res.send(output);
        }).catch(err=>{
            res.send(err);
        })
    }

    getMilkDetailById(req,res){
        let id = req.params.id;
        milkRepository.getMilkDetailById(id).then(output=>{
            res.send(output);
        }).catch(err=>{
            res.send(err);
        })

    }

    updateMilkRate(req,res){
        let newR = req.body.newRate;
        let oldR = req.body.oldRate;
        milkRepository.updateMilkRate(newR,oldR).then(output=>{
            res.send(output);
        });
    }

}

module.exports = new MilkController();