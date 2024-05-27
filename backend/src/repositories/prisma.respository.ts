// src/repositories/prisma.respository.ts

import { PrismaClient } from '@prisma/client';
import { IFavoriteRepository } from './favorite.respository';
import Favorite from '../entities/fav.entity';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

export class PrismaRepository implements IFavoriteRepository {
  async getFavorites(userId: string): Promise<Favorite[]> {
    return prisma.favorite.findMany({ where: { userId } });
  }

  async addFavorite(params: {userId: string, productId: string}): Promise<Favorite> {
    const {userId, productId} = params
    return prisma.favorite.create({ data: { userId, productId } });
  }

  async removeFavorite(params: {userId: string, productId: string}): Promise<void> {
    const {userId, productId} = params
    try {
      await prisma.favorite.delete({ 
        where: {
        userId_productId: {
          userId,
          productId
        }
      }});
    }
   catch (error) {
      if(!(error instanceof PrismaClientKnownRequestError )){
        throw error
      }

      // P2025 code:
      // An operation failed because it depends on one or more records that were required but not found (Record to delete does not exist)
      if(error.code !== "P2025"){
        throw error
      }
    }
  }
}
