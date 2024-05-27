// src/repositories/mock.repository.ts

import { IFavoriteRepository } from "./favorite.respository";

interface Favorite {
  userId: string;
  productId: string;
}

export class MockRepository implements IFavoriteRepository {
  private favorites: Favorite[] = [
    { userId: 'user1', productId: 'product1' },
    { userId: 'user1', productId: 'product2' },
    { userId: 'user2', productId: 'product3' },
    { userId: 'user2', productId: 'product4' },
    { userId: 'user3', productId: 'product5' },
    { userId: 'user3', productId: 'product6' },
    { userId: 'user4', productId: 'product7' },
    { userId: 'user4', productId: 'product8' },
    { userId: 'user5', productId: 'product9' },
    { userId: 'user5', productId: 'product10' },
    { userId: 'user6', productId: 'product11' },
    { userId: 'user6', productId: 'product12' },
    { userId: 'user7', productId: 'product13' },
    { userId: 'user7', productId: 'product14' },
    { userId: 'user8', productId: 'product15' }
  ];

  async getFavorites(userId: string): Promise<Favorite[]> {
    console.log('Retrive favs for user:', userId);
    return this.favorites.filter(fav => fav.userId === userId);
  }

  async addFavorite(params: {userId: string, productId: string}): Promise<Favorite> {
    const {userId, productId} = params;
    const favorite = { userId, productId };
    this.favorites.push(favorite);
    return favorite;
  }

  async removeFavorite(params: {userId: string, productId: string}): Promise<void> {
    const {userId, productId} = params;
    this.favorites = this.favorites.filter(
      fav => !(fav.userId === userId && fav.productId === productId)
    );
  }

  get mockData() { return this.favorites}
}
