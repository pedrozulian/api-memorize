const router = require('express').Router();
const SessionController = require('../controllers/session.controller');

router.post('/login', SessionController.login);

module.exports = router;