// /src/entities/fav.entity.ts

class Favorite {
    public productId: string;
    public userId: string;
  
    constructor(productId: string, userId: string) {
      this.productId = productId;
      this.userId = userId;
    }
  }

  export default Favorite