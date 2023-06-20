import ProductItem from "./ProductItem";

const ProductList = ({ products = [], isLoading, searchQuery }) => {
  return (
    <div style={{
    }}>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : products.length === 0 ? (
        <h2>No products found{searchQuery ? ` for "${searchQuery}"` : ''}</h2>
      ) : (
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: '0',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
          gap: '12px',
        }}>
          {
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          }
        </ul>
      )}
    </div>
  );
}

export default ProductList;
