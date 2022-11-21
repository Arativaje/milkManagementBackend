const logger = require('../logger/logger');
const flatModel = require('../model/flat.model');
const societyModel = require('../model/society.model');

class societyRepository{

    async getSociety(){
        return await societyModel.find({});
    }
    async addSociety(addsociety){
        return await societyModel.create(addsociety);
    }
    async updateSociety(id,society){
        return await societyModel.updateOne({_id:id},society);
    }
    async deleteSociety(id){
        return await societyModel.deleteOne({_id:id});
    }
    async getSocietyById(id){
        return await societyModel.findOne({_id:id});
    }

    async getSocietyFlats(societyId){
        return await flatModel.find({societyId:societyId});
    }

}

module.exports = new societyRepository();








