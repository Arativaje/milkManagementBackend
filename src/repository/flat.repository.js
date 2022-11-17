const logger = require('../logger/logger');

const flatModel = require('../model/flat.model');

class flatRepository{
    async addFlat(newFlat){
        return await flatModel.create(newFlat);
    }

    async getFlat(){
        let result = {};
        try{
            result = await flatModel.find({});
        }catch(error){
            result = error;
        }
        return result;
    }

    async deleteFlat(id){
        return await flatModel.deleteOne({_id:id});
    }

    async updateFlat(id,newFlat){
        return await flatModel.updateOne({_id:id},newFlat);

    }

    async getFlatById(id){
        return await flatModel.findOne({_id:id});
    }


}

module.exports = new flatRepository();
