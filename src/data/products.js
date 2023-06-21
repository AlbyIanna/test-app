import { Config } from "../config";

const PRODUCTS_URL = `${Config.DUMMY_API_URL}/products`;
const PAGE_SIZE = 20;

export async function fetchProduct({ queryKey }) {
  const [, productId] = queryKey;
  const response = await fetch(`${PRODUCTS_URL}/${productId}`);

  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function fetchProducts({ queryKey }) {
  const [, searchQuery, page] = queryKey;
  const queryParams = [];
  if (searchQuery) {
    queryParams.push(`q=${searchQuery}`);
  }
  if (page) {
    queryParams.push(`skip=${(page - 1) * PAGE_SIZE}`);
  }
  queryParams.push(`limit=${PAGE_SIZE}`);
  const searchString = searchQuery.length > 0 ? "/search" : "";
  const url = `${PRODUCTS_URL}${searchString}?${queryParams.join('&')}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`An error has occured: ${response.status} `);
  }

  const data = await response.json();
  return data;
}


