import { cleanup, getByText, render, waitFor } from '@testing-library/react';
import React from 'react';
import Product from './Product';
import { Product as ProductInterface } from '@product-viewer/api-interfaces';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  })
}));

describe('Product', () => {
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        id: '1',
        name: 'Name',
        order: 0,
        media: [],
        vendor: 'vendor'
      } as ProductInterface),
    });

    const { baseElement } = render(<Product />);
    await waitFor(() => getByText(baseElement, 'Name'));
    await waitFor(() => getByText(baseElement, 'vendor'));
  });
});
