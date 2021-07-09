const { User } = require('../../src/models');
const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('CRUD of users', () => {
    it('should be create a new user on route /users', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Joao',
                email: 'joao@mail.com',
                password: '123qwe'
            });
        
        expect(response.status).toBe(200);
    });
});