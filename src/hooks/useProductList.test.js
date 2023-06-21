import { describe, expect, test } from "vitest";
import { renderHook, waitFor } from "../tests/utils";

import { useProductList } from "./useProductList";

describe("useProductList", () => {
  test("returns a list of products and isLoading=false", async () => {
    const response = JSON.stringify(
      {
        products: [
          {
            id: 1,
            name: "Test Product",
            description: "Test Product Description",
            price: 100,
            images: ["image1"],
          },
          {
            id: 2,
            name: "Test Product 2",
            description: "Test Product Description 2",
            price: 200,
            images: ["image2"],
          }
        ],
      });
    fetch.mockResponse(response);

    const { result } = renderHook(() => useProductList());
    await waitFor(() => expect(result.current[1]).toBe(false));
    const [products, isLoading] = result.current;

    expect(products).toEqual([
      {
        id: 1,
        name: "Test Product",
        description: "Test Product Description",
        price: 100,
        images: ["image1"],
      },
      {
        id: 2,
        name: "Test Product 2",
        description: "Test Product Description 2",
        price: 200,
        images: ["image2"],
      }
    ]);
    expect(isLoading).toBe(false);
  });

  test("returns an empty list and isLoading=true when no product is passed", () => {
    const { result, } = renderHook(() => useProductList());
    const [products, isLoading] = result.current;
    expect(products).toEqual([]);
    expect(isLoading).toBe(true);
  });
});
