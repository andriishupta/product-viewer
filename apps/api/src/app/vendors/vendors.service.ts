import { VendorsRepository } from './vendors.repository';

export class VendorsService {
  static get(): string[] {
    return VendorsRepository.get();
  }
}
