const { User } = require('../../src/models');
const request = require('supertest');
const app = require('../../src/app');

const token = process.env.BEARER_TOKEN_TEST;

describe('Session of user', () => {
    beforeEach(async () => {
        await User.destroy({ truncate: true, force: true });
    });

    it('should make a login with credentials of user on route /session/login', async () => {
        const user = await User.create({
            name: 'Erik',
            email: 'erik@mail.com',
            password: '70show'
        });

        const response = await request(app)
            .post('/session/login')
            .auth(token, { type: 'bearer' })
            .send({
                email: user.email,
                password: '70show'
            })

        expect(response.status).toBe(200);
    });
});