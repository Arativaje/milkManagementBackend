const logger = require('../logger/logger');
const typeModel = require('../model/type.model');

class TypeRepository{
    async getType(){
        return await typeModel.find({});
    }
    async addType(type){
        return await typeModel.create(type);
    }
    async updateType(id,milkType){
        return await typeModel.updateOne({_id:id},milkType);
    }
    async deleteType(id){
        return await typeModel.deleteOne({_id:id});
    }
    async getTypeById(id){
        return await typeModel.findById(id); // find({_id:id}) o/p=> [{}]
    }
}

module.exports = new TypeRepository();