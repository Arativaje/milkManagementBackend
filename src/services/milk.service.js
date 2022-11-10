const MilkRepository = require('../repository/milk.repository');

class MilkService{
    async getMilk(){
        return await MilkRepository.getMilk();
    }

    async addMilk(milk){
        return await MilkRepository.addMilk(milk);
    }

    async updateMilk(a,b){
        return await MilkRepository.updateMilk(a,b);
    }

    async removeMilk(milkId){
        return await MilkRepository.removeMilk(milkId);
    }
}

module.exports = new MilkService();