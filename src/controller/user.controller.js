const resetPasswordRepository = require('../repository/resetPassword.repository');
const userRepository = require('../repository/user.repository');

class UserController {
    getUser(req, res) {
        userRepository.getUser().then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }

    addUser(req, res) {
        let body = req.body;
        userRepository.addUser(body).then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }

    updateUser(req, res) {
        let userData = req.body;
        let id = req.params.id;
        userRepository.updateUser(id, userData).then(output => {
            res.send(output);
        }).catch(err => {
            console.log(err);
            let message;
            if (err.code === 11000) {
                message = `Mobile (${err.keyValue.mobileNumber}) number already exist`;
            }
            res.status(400).json({ error: message });
        });
    }

    removeUser(req, res) {
        let body = req.params.id;
        userRepository.deleteUser(body).then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }

    getUserById(req, res) {
        let id = req.params.id;
        userRepository.getUserById(id).then(output => {
            res.send(output);
        }).catch(err => {
            res.send(err);
        });
    }
    login(req, res) {
        let loginData = req.body;
        userRepository.login(loginData).then(output => {
            if (output) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
    }
    forgot(req, res) {
        let email = req.query.email;
        if (!email && email.trim().length == 0) {
            res.send("Please provide valid E-Mail Address").end();
        } else {
            let otp = Math.random().toString(36).slice(2, 10);

            userRepository.findUser(email.trim()).then(user => {

                let userId = user._id;
                //store tmp password and user id for further verification

                let sub = "Forgot Password | Milk Management";

                let emailBody = `Dear ${user.firstName} ${user.lastName},<br><br>
                Your OTP is : <b>${otp}</b><br>
                Your can use this to change your Milk Management Account password.<br>
                            
                <br><br>
                <i>Thanks,<br>
                <b>Millk Management Team.</b><br>
                Arati @ Developer from Pune.</i>`;
                userRepository.sendEmail(email, sub, emailBody).then(info => {

                    let sendResponse = { id: info.messageId,message:"Password Reset Success."};
                    res.send(sendResponse);
                }).catch(err => {
                    res.send({ err,message:"Password Reset Failed."})
                });

            }).catch(err => {
                res.send({ err,message:"User not exist in system."})
            });
        }
    }
    sendEmail(req, res) {
        let to = req.body.to;
        let sub = req.body.subject;
        let body = req.body.body;
        userRepository.sendEmail(to, sub, body).then(info => {
            let sendResponse = { id: info.messageId,message:"Password Reset Success."};
            res.send(sendResponse);
        }).catch(err => {
            res.send({ err,message:"Password Reset Failed."})
        });
    }

    resetPwd(req,res){
        let resetData = req.body;
        userRepository.findUser(resetData.email).then(user=>{
            let userId = user._id;           
        resetPasswordRepository.findResetUser(userId).then(resetUser=>{
            if(resetUser.otp===resetData.otp){
                user.password = resetData.otp;
                user.save().then(updatedUser=>{
                    res.send({updatedUser,message:"Password Reset Success"});
                }).catch(err=>{
                    res.send({err,message:"Password Reset Failed."});
                });
            }
        });
        });
    }
}

module.exports = new UserController();