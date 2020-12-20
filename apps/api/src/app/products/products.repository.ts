import { Product } from '@product-viewer/api-interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { products } from '../../assets/data.json';

export class ProductsRepository { // implements CRUD
  // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
  static get({ vendor, search }: { vendor: string, search: string }): Product[] {
    let productsResponse: Product[] = products as any as Product[];

    if (vendor) {
      productsResponse = productsResponse.filter(product => product.vendor === vendor);
    }

    if (search) {
      productsResponse = productsResponse.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }

    return productsResponse;
  }

  static getById(id: string): Product {
    // find by id and return
    // currently only 1 promotion
    return (products as any as Product[]).find(product => product.id === id);
  }
}
