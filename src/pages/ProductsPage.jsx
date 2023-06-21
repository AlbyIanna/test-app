import { useState } from "react";
import ProductList from "../components/Products/ProductList";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../data/products";
import { Search } from "../components/Search/Search";


const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ['products', searchQuery, page],
    fetchProducts,
    {
      staleTime: 1000 * 60 * 60,
    }
  )

  const { products, total, skip, limit } = data || {};

  return (
    <div>
      <h2>Products</h2>
      <Search initialQuery={searchQuery} onChange={setSearchQuery} debounceTime={300} />
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(page + 1)} disabled={page * limit >= total}>Next</button>
        <p>Page {page} of {Math.ceil(total / limit)}</p>
        <p>Showing {skip + 1} to {skip + products?.length || 0} of {total} products</p>
      </div>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default ProductsPage;
