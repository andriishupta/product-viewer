import { Product } from '@product-viewer/api-interfaces';
import { ProductsRepository } from './products.repository';

export class ProductsService {
  static get(): Product[] {
    return ProductsRepository.get();
  }

  static getById(id: string): Product {
    return ProductsRepository.getById(id);
  }
}
