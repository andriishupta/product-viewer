// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { vendors } from '../../../../../data.json';

export class VendorsRepository { // implements CRUD
  static get(): string[] { // static, cause NO Dependency injection and I don't want create new PromotionsRepository() by hands
    return vendors;
  }
}
