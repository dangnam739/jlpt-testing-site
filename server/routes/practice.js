var express = require('express');
var router = express.Router();
var practiceModel = require('./../model/practiceModel')
var isLogin = require('./../model/authModel').checkLogin;

/* GET users listing. */
router.post('/update',isLogin,practiceModel.update)
router.get('/getall', isLogin, practiceModel.getAllP);
router.get('/:level', isLogin, practiceModel.getAllByLevel);
router.get('/:level/:type', isLogin, practiceModel.getAll);
router.get('/:level/:type/:id', isLogin, practiceModel.getPracticeById);


router.post('/add',isLogin,practiceModel.addP)
router.post('/', isLogin, practiceModel.add);
router.post('/delete', isLogin, practiceModel.remove);

module.exports = router;