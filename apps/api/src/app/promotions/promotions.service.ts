import { Promotion } from '@product-viewer/api-interfaces';
import { PromotionsRepository } from './promotions.repository';

export class PromotionsService {
  static get(): Promotion[] {
    return PromotionsRepository.get();
  }

  static getById(id: string): Promotion {
    return PromotionsRepository.getById(id);
  }
}
