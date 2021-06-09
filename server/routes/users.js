var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel')
var isLogin = require('../model/authModel').checkLogin;

/* GET users listing. */
router.post('/delete/:id',isLogin, userModel.deleteUser)
router.get('/getall', isLogin, userModel.getAllUser);
router.get('/:id', isLogin, userModel.getUserById);
router.put('/:id', isLogin, userModel.update)
router.post('/checkPassword', isLogin, userModel.checkPassWord)

module.exports = router