import { Product } from '@product-viewer/api-interfaces';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';

const products = [{
  id: '1',
  vendor: 'Vendor',
  media: [],
  name: 'name',
  order: 1
} as Product]

jest.mock('./products.repository');

/**
 * For the future, when we would have what to test
 * Testing Repository is pointless, such as it is like Database and we don't test something like PostgreSQL in unit tests
 */
describe('Product service', () => {
  it('should return data from repository, with no side-effects', () => {
    ProductsRepository.get = jest.fn().mockReturnValue(products);

    expect(ProductsService.get({ search: '', vendor: '' })).toEqual(products);
  });
});
