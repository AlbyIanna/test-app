import { expect, test } from 'vitest';

import ProductItem from './ProductItem';
import placeholderImage from '../../assets/placeholder-image.png';
import { render } from '../../tests/utils';
import { Products } from '../../tests/fixtures/products';

test("displays a default thumbnail", async () => {
  const product = render(<ProductItem product={{}} />)
  const productThumbnail = await product.findByTestId('thumbnail');
  expect(productThumbnail.src).toContain(placeholderImage);
  product.unmount();
});

test("displays a non-default thumbnail", async () => {
  const product = render(<ProductItem product={Products.aProduct} />)
  const productThumbnail = await product.findByTestId('thumbnail');
  expect(productThumbnail.src).toContain(Products.aProduct.images[Products.aProduct.images.length - 1]);
  product.unmount();
});
