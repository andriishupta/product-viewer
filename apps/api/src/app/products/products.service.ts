import { Product } from '@product-viewer/api-interfaces';
import { ProductsRepository } from './products.repository';

export class ProductsService {
  static get(query: { vendor: string, search: string }): Product[] {
    return ProductsRepository.get(query);
  }

  static getById(id: string): Product {
    return ProductsRepository.getById(id);
  }
}
