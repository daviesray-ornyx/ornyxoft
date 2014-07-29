var express = require('express');
var router = express.Router();


var mainController = require('../controllers/mainController');
var userController = require('../controllers/userController');


/* GET users listing. */
router.get('/',mainController.home);

/* user routes
router.post('/users/login',userController.login);
router.get('/users/logout',userController.logout);
router.post('/users/register', userController.register);
    */ //-- end of user routes

module.exports = router;
