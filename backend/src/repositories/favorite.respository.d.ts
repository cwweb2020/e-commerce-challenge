// /src/repositories/favorite.respository.d.ts

import Favorite from "../entities/fav.entity";

export interface IFavoriteRepository {
    getFavorites(userId: string): Promise<Favorite[]>;
    addFavorite(params: {userId: string, productId: string}): Promise<Favorite>;
    removeFavorite(params: {userId: string, productId: string}): void;
  }