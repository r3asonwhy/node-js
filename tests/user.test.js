const request = require('supertest');
const app = require('../src/app');

describe('User API Endpoints', () => {
    it('GET /api/users - should return all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('GET /api/users/:id - should return user by ID', async () => {
        const res = await request(app).get('/api/users/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 1);
        expect(res.body).toHaveProperty('name', 'Alice');
    });

    it('GET /api/users/:id - should return 404 for invalid ID', async () => {
        const res = await request(app).get('/api/users/999');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'User not found');
    });
});
