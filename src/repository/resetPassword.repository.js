const logger = require('../logger/logger');

const resetPasswordModel = require('../model/resetPassword.model');

class ResetPasswordRepository{
    async storeOtp(otp,userId){
        return await resetPasswordModel.create({userId:userId,otp:otp});
    }

}

module.exports = new ResetPasswordRepository();