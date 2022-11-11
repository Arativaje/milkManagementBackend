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
            // console.log(err);
            // res.status(400).json(err);
            if(err && err.code && err.code =='11000'){
                res.status(400).json({message:"Email or Mobile number is already exist"});
            }else{
                res.status(400).json({message:"Email and Mobile number is required",err});
            }
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
        userRepository.login(loginData).then(user => {
            if (user) {
                if(user.password === loginData.password){
                    if(user.status=="Active"){
                        res.send(true);
                    }else{
                        res.status(400).json({message:"User is disabled, please contact admin"});
                    }
                }else{
                    res.status(400).json({message:"Username or password is incorrect"});
                }
                
            } else {
                res.status(400).json({message:"User is not exist in system, please contact admin"});
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
                resetPasswordRepository.storeOtp(otp, userId).then(otpdata => {
                    console.log("Otp stored in DB", otpdata);
                });
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

                    let sendResponse = { id: info.messageId, message: "Email sent successfully." };
                    res.send(sendResponse);
                }).catch(err => {
                    res.status(400).json({ err, message: "Email Failed." })
                });

            }).catch(err => {
                res.status(400).json({ err, message: "email is not associated with any account in system." })
            });
        }
    }
    sendEmail(req, res) {
        let to = req.body.to;
        let sub = req.body.subject;
        let body = req.body.body;
        userRepository.sendEmail(to, sub, body).then(info => {
            let sendResponse = { id: info.messageId, message: "Password Reset Success." };
            res.send(sendResponse);
        }).catch(err => {
            res.send({ err, message: "Password Reset Failed." })
        });
    }

    resetPwd(req, res) {
        let resetData = req.body;
        userRepository.findUser(resetData.email).then(user => {
            if(!user){
                return res.status(200).json({message: "User is not exist" }).end;
            }
            let userId = user._id;
            resetPasswordRepository.findOtp(userId).then(resetUser => {
                if (resetUser && resetUser.otp === resetData.otp) {
                    user.password = resetData.password;
                    user.save().then(updatedUser => {
                        resetPasswordRepository.deleteOtp(resetUser._id).then(deletedOtp => {
                            res.send({ updatedUser, message: "Password Reset Success" });
                        });

                    }).catch(err => {
                        res.send({ err, message: "Password Reset Failed." });
                    });
                }else {
                    res.status(410).json({message: "OTP Already used or expired" });
                }
            });
        });
    }
}

module.exports = new UserController();