// /__test__/favorite.controller.spec.ts

import request from 'supertest';
import app from '../index';
import { MockRepository } from '../repositories/mock.repository';

describe('FavoriteController', () => {
  
  const respository = new MockRepository();
  const mockData = respository.mockData

  beforeEach(() => {
  });

  describe('GET /api/favorites', () => {
    it('should return 400 if userId is not provided', async () => {
      const response = await request(app).get('/api/favorites');
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId is required' });
    });

    it('should return 200 and the list of favorites', async () => {

      const mockUser = mockData[0].userId;
      const response = await request(app)
        .get('/api/favorites')
        .query({ userId:  mockUser});

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockData.filter(fav => fav.userId === mockUser));
    });
  });

  describe('POST /api/favorite', () => {
    it('should return 400 if userId or productId is not provided', async () => {
      let response = await request(app).post('/api/favorite').send({});
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });

      response = await request(app).post('/api/favorite').send({ userId: 'user1' });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });
    });

    it('should return 200 and the added favorite', async () => {
      const mockFavorite = { userId: 'user1', productId: 'product9' };

      const response = await request(app).post('/api/favorite').send(mockFavorite);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockFavorite);
    });
  });

  describe('DELETE /api/favorite', () => {
    it('should return 400 if userId or productId is not provided', async () => {
      let response = await request(app).delete('/api/favorite').send({});
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });

      response = await request(app).delete('/api/favorite').send({ userId: 'user1' });
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: 'userId and productId are required' });
    });

    it('should return 204 if the favorite is removed', async () => {

      const response = await request(app).delete('/api/favorite').send({
        userId: 'user1',
        productId: 'product1',
      });

      expect(response.status).toBe(204);
    });
  });
});
