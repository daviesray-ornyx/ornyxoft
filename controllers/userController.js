var User = require('../models/user');

var userController = {

    register : function(req, res){
        User.count({username : req.body.username},function(err,c){
            if(err){
                res.status = 500;
                return res.send(500,"Error");
            }
            if(c > 0){
                res.status = 500;
                return res.send(500,"Error");
            }
            else{
                var user = new User({
                    email : req.body.email,
                    username : req.body.username,
                    password : req.body.password
                });
                user.save(function(err){
                    if(err){
                        res.status = 500;
                        return res.send(500,"Error");
                    }
                    else{
                        return res.json(user);
                    }
                });
            }
        });
    },

    login : function (req, res) {
        User.findOne({username : req.body.username, password : req.body.password},function(err,user){
            if(err){
                console.log("Login error, confirm your username and or password");
                res.status = 500;
                return res.send(500,"Login error, confirm your username and or password");
            }
            if(!user){
                console.log("Login error, confirm your username and or password");
                res.status = 500;
                return res.send(500,"Login error, confirm your username and or password");
            }
            else{
                console.log("Login succeeded");
                return res.json(user);
            }
        });
    },

    logout : function (req, res) {
        // Logout user
    }
};

module.exports = userController;
