const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/', UserController.create);

router.get('/:idUser', UserController.getById);

module.exports = router;