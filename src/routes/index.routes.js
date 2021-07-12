const router = require('express').Router();

router.use('/users', require('./user.routes'));
router.use('/session', require('../routes/session.routes'));

module.exports = router;