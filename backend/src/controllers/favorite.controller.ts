// /src/controllers/favorite.controller.ts

import { Request, Response, NextFunction } from 'express';
import { FavoriteService } from '../services/favorite.service';
import { BadRequestError } from '../errors/badRequest.error';
import Favorite from '../entities/fav.entity';

export class FavoriteController {
  private favoriteService: FavoriteService;

  constructor(service: FavoriteService) {
    this.favoriteService = service;
  }

  async getFavorites(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.query.userId as string;

      if (!userId) throw new BadRequestError('userId is required');

      const favorites = await this.favoriteService.getFavorites(userId);
      res.json(favorites);
    } catch (error) {
      next(error);
    }
  }

  async addFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, productId } = req.body;

      if (!userId || !productId) throw new BadRequestError('userId and productId are required');

      const favorite = await this.favoriteService.addFavorite({ userId, productId });
      res.json(favorite);
    } catch (error) {
      next(error);
    }
  }

  async removeFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, productId } = req.query as unknown as Favorite;

      if (!userId || !productId) throw new BadRequestError('userId and productId are required');

      await this.favoriteService.removeFavorite({ userId, productId });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}
