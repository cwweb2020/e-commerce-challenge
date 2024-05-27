// /src/routes/fav.routes.ts

import { Router } from 'express';
import { FavoriteController } from '../controllers/favorite.controller';
import { FavoriteService } from '../services/favorite.service';
import { MockRepository } from '../repositories/mock.repository';
import { PrismaRepository } from '../repositories/prisma.respository';

const router = Router();
const favoriteService = new FavoriteService(process.env.NODE_ENV === 'test' ? new MockRepository() : new PrismaRepository)
const favoriteController = new FavoriteController(favoriteService);

router.get('/favorites', (req, res, next) => favoriteController.getFavorites(req, res, next));
router.post('/favorite', (req, res, next) => favoriteController.addFavorite(req, res, next));
router.delete('/favorite', (req, res, next) => favoriteController.removeFavorite(req, res, next));

export { router as favoriteRouter };
