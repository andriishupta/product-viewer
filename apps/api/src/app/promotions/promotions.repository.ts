import { Promotion } from '@product-viewer/api-interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { promotion } from '../../../../../data.json';

export class PromotionsRepository { // implements CRUD
  static get(): Promotion[] { // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
    return [promotion].filter(prom => !prom.hide); // only enabled promos
  }

  static getById(id: string): Promotion {
    // find by id and return
    // currently only 1 promotion
    return promotion;
  }
}
