const { User } = require('../models');

class UserController {
    async create (req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).send({ message: 'User created' });
        } catch (error) {
            if (error.name == 'SequelizeUniqueConstraintError') {
                return res.status(400).send({ message: 'E-mail already used' });
            }
            return res.status(500).send(error);
        }
    }
}

module.exports = new UserController();