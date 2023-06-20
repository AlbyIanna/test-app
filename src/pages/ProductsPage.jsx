import { useState } from "react";
import ProductList from "../components/Products/ProductList";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../data/products";


const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ['products', searchQuery, page],
    fetchProducts,
  )

  const { products, total, skip, limit } = data || {};
  console.log(total, skip, limit)

  return (
    <div>
      <h2>Products</h2>
      <input type='search' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
