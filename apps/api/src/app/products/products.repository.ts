import { Product } from '@product-viewer/api-interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { products } from '../../../../../data.json';

export class ProductsRepository { // implements CRUD
  // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
  static get({ vendor, search }: { vendor: string, search: string }): Product[] {
    let productsResponse: Product[] = products;

    if (vendor) {
      productsResponse = productsResponse.filter(product => product.vendor === vendor);
    }

    return productsResponse;
  }

  static getById(id: string): Product {
    // find by id and return
    // currently only 1 promotion
    return products.find(product => product.id === id);
  }
}
