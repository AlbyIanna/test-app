import { useEffect, useState } from "react";
import { Config } from "../config";

const PRODUCTS_URL = `${Config.DUMMY_API_URL}/products`;
const cachce = {};

export function useProductList(searchQuery = '') {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cachce[searchQuery]) {
      setProducts(cachce[searchQuery]);
      setIsLoading(false);
      return;
    }
    fetchProducts();

    async function fetchProducts() {
      // calculate the query params
      const queryParams = [];
      if (searchQuery) {
        queryParams.push(`q=${searchQuery}`);
      }
      // string to append to the url. if searchQuery is empty, it will be an empty string. otherwise it will be /search?q=...
      const queryString = searchQuery.length > 0 ? `/search?${queryParams.join('&')}` : '';

      // concat the url with the query string
      const url = `${PRODUCTS_URL}${queryString}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setIsLoading(false);
    }
  }, [searchQuery]);

  return [products, isLoading];
}
