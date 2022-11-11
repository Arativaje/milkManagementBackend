const logger = require('../logger/logger');

const resetPasswordModel = require('../model/resetPassword.model');

class ResetPasswordRepository{
    async storeOtp(otp,userId){
        return await resetPasswordModel.updateOne({userId:userId},{userId:userId,otp:otp},{upsert:true});
    }
    async findOtp(userId){
        return await resetPasswordModel.findOne({userId:userId});
    }
    async deleteOtp(Id){
        return await resetPasswordModel.deleteOne({_id:Id});
    }

}

module.exports = new ResetPasswordRepository();