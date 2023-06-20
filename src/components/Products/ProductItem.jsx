import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <li style={{
      border: '1px solid #666',
      borderRadius: '6px',
      flex: '0 0 300px',
      display: 'flex',
      flexDirection: 'column',
      height: '400px',
    }}>
      <Link to={`/products/${product.id}`} style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        color: 'inherit'
      }}
      >
        <div style={{
          height: '50%',
          overflow: 'hidden',
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center',
        }}>
          <img style={{
            width: '100%',
          }}
            src={product.images[product.images.length - 1]}
            alt={`${product.title} thumbnail`} />
        </div>
        <div>
          <div>{product.title}</div>
          <div>$ {product.price}</div>
          <div>{product.category}</div>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
