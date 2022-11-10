const logger = require('../logger/logger');

const userModel = require('../model/user.model');

class UserRepository{
  

    async getUser(){
        return await userModel.find({});
    }
    async addUser(data){
        let user ={};
        try {
            user = await userModel.create(data);
        } catch (error) {
            user =error;
        }
        return user;
    }

    async addUserold(data){
        //find user is exist or not based on email and mobileNumber
        // let foundUser = await userModel.findOne({mobileNumber:data.mobileNumber});
        // console.log(foundUser);
        // if(foundUser) {
        //     return new Promise((resolve, reject) => {
        //         reject("User Already Exist");
        //     });
        // }else{
        //     return await userModel.create(data);
        // }
        
        return await userModel.create(data);
        //if it found then return error message
        // otherwise create and return user.
        
        
    }

    async updateUser(id,userData){
        return  await userModel.updateOne({_id:id},userData);

      
    }

    async deleteUser(userId){
        return await userModel.deleteOne({_id:userId});
    }

    async getUserById(id){
        let result ={};
        try {
            result = await userModel.findById(id);
            
        } catch (error) {
            result =error;
        }
        return result;
    }
    async login(data){
        return await userModel.findOne(
            {
                $or:
                [
                    {
                        mobileNumber:data.username
                    },
                    {
                        email:data.username
                    }
                ] ,
                password:data.password
            });
    }

    async findUser(email){
        return await userModel.findOne({email:email});
    }
    async sendEmail(to,sub,body){
        const nodemailer = require('nodemailer');
        
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'developerarati@gmail.com', // generated ethereal user
              pass: "vvpxmxviddftmgnu", // generated ethereal password
            },
          });
        

        return await transporter.sendMail({
            from: '"🥛 Milk Management 🥛" <developerarati@gmail.com>', // sender address
            to: to, // list of receivers
            subject: sub, // Subject line
            html: body, // plain text body
            //html: "<b>Hello world?</b>", // html body
          });
    }  
    
}

module.exports= new UserRepository();