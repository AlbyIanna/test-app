import { describe, expect, test } from 'vitest';
import { render } from '../../tests/utils';
import { Carousel } from './Carousel';

describe("Carousel", async () => {
  const images = ['image1', 'image2', 'image3'];

  test("displays the first image by default", async () => {
    const carousel = render(<Carousel images={images} />);
    const mainImage = await carousel.findByTestId('carousel-main-image');
    expect(mainImage.src).toContain(images[0]);
    carousel.unmount();
  });

  test("displays the correct image when clicking on a thumbnail", async () => {
    const carousel = render(<Carousel images={images} />);
    const mainImage = await carousel.findByTestId('carousel-main-image');
    for (let i = 0; i < images.length; i++) {
      const thumbnail = await carousel.findByTestId(`thumbnail-${i}`);
      await thumbnail.click();

      expect(mainImage.src).toContain(images[i]);
      expect(thumbnail.className).toContain('active');
    }
    carousel.unmount();
  });
});
