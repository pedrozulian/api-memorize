const { User } = require('../../src/models');
const request = require('supertest');
const app = require('../../src/app');

describe('CRUD of users', () => {
    beforeEach(async () => {
        await User.destroy({ truncate: true, force: true });
    });
    
    it('should be create a new user on route /users', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Joao',
                email: 'joao@mail.com',
                password: '123qwe'
            });
        
        expect(response.status).toBe(201);
    });

    it('should get a user by id on route /users', async () => {
        const user = await User.create({
            name: 'Maria',
            email: 'maria@mail.com',
            password: '321qwe'
        });

        const response = await request(app)
            .get(`/users/${user.id}`);

        expect(response.status).toBe(200);
    });

    it('should delete a user by id on route /users', async () => {
        const user = await User.create({
            name: 'Carlos',
            email: 'carlos@mail.com',
            password: '123321'
        });

        const response = await request(app)
            .delete(`/users/${user.id}`);
        
        expect(response.status).toBe(200);
    });
});