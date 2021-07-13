const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const login = require('../middlewares/login.middleware');

router.post('/', UserController.create);

router.get('/:idUser', login.required, UserController.getById);

router.patch('/:idUser', login.required, UserController.update);

router.delete('/:idUser', login.required, UserController.delete);

module.exports = router;