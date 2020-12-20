import { Product } from '@product-viewer/api-interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { products } from '../../../../../data.json';

export class ProductsRepository { // implements CRUD
  static get(): Product[] { // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
    return products;
  }

  static getById(id: string): Product {
    // find by id and return
    // currently only 1 promotion
    return products.find(product => product.id === id);
  }
}
