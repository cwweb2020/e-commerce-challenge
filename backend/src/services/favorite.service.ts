// /src/services/favorite.service.ts

import { IFavoriteRepository } from "../repositories/favorite.respository";

export class FavoriteService {
  private favoriteRepository: IFavoriteRepository;

  constructor(repo:IFavoriteRepository) {
    this.favoriteRepository = repo;
  }

  async getFavorites(userId: string) {
    return this.favoriteRepository.getFavorites(userId);
  }

  async addFavorite(params: {userId: string, productId: string}) {
    return this.favoriteRepository.addFavorite({...params});
  }

  async removeFavorite(params: {userId: string, productId: string}) {
    return this.favoriteRepository.removeFavorite({...params});
  }
}
