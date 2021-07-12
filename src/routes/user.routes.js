const router = require('express').Router();
const UserController = require('../controllers/user.controller');

router.post('/', UserController.create);

router.get('/:idUser', UserController.getById);

router.patch('/:idUser', UserController.update);

router.delete('/:idUser', UserController.delete);

module.exports = router;