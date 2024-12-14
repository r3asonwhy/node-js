const request = require('supertest');
const app = require('../src/app');

describe('Data API Endpoints', () => {
    it('GET /api/data - should return all data', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('GET /api/data/:id - should return data by ID', async () => {
        const res = await request(app).get('/api/data/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 1);
    });

    it('GET /api/data/:id - should return 404 for invalid ID', async () => {
        const res = await request(app).get('/api/data/999');
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message', 'Item not found');
    });
});
