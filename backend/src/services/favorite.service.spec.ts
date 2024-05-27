// /__tests__/favorite.service.spec.ts

import { MockRepository } from "../repositories/mock.repository";
import { FavoriteService } from "./favorite.service";


describe('FavoriteService', () => {
  let favoriteService: FavoriteService;
  const repository = new MockRepository();
  
  const MOCK_DATA = repository.mockData
  beforeAll(() => {
    favoriteService = new FavoriteService(repository);
  });

  test('should add favorites', async () => {

    const {userId, productId} = {userId: 'userZ', productId: 'productZ'}
    const favorite = await favoriteService.addFavorite({userId, productId});
    expect(favorite).toHaveProperty('userId', userId);
    expect(favorite).toHaveProperty('productId', productId);
  });

  test('should get favorites', async () => {
    const mockUser = MOCK_DATA[0].userId;
    const favorites = await favoriteService.getFavorites(mockUser);
    expect(favorites).toEqual(MOCK_DATA.filter(fav => fav.userId === mockUser));

  });

  test('should remove a favorite', async () => {
    const mockFav =  {userId: 'userZ', productId: 'productZ'}
    await favoriteService.removeFavorite(mockFav);
    const favorites = await favoriteService.getFavorites(mockFav.userId);
    expect(favorites).toEqual([]);
  });

  test('should handle non-existent favorite removal gracefully', async () => {
    await expect(favoriteService.removeFavorite({
      userId: 'user1', productId: 'non-existent-product'
    })).resolves.toBeUndefined();
  });
});
