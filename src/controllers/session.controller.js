const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class SessionController {
    async login(req, res) {
        try {
            const user = await User.findOne({ where: { email: req.body.email }});
            if (!user) {
                return res.status(400).send({ message: 'Check if the datas are correct' });
            }

            if (bcrypt.compareSync(req.body.password, user.password)) {
                var token = jwt.sign({
                    idUser: user.id,
                    email: req.body.email
                }, process.env.JWT_KEY, { expiresIn: '8d' });

                return res.status(200).send({
                    message: 'Authentication success',
                    token: token
                });
            } else {
                return res.status(400).send({ message: 'Email and/or password incorrect' });
            }
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = new SessionController();