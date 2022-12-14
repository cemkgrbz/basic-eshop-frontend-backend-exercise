const express = require('express');

const router = express.Router();

const userController  = require('../controllers/userControllers.js')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/list', userController.list);
router.get('/findone/:_id', userController.findOne);
router.delete('/delete/:_id', userController.delete);
router.patch('/edit', userController.edit);



module.exports = router
