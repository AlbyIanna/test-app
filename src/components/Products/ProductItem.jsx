import { Link } from "react-router-dom";
import placeholderImage from '../../assets/placeholder-image.png'

const ProductItem = ({ product } = {}) => {
  const { images = [], title, price, category, id = 0 } = product;
  const thumbnail = images[images.length - 1] || placeholderImage;

  return (
    <li style={{
      border: '1px solid #666',
      borderRadius: '6px',
      flex: '0 0 300px',
      display: 'flex',
      flexDirection: 'column',
      height: '400px',
    }}>
      <Link to={`/products/${id}`} style={{
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
            src={thumbnail}
            alt={`${title} thumbnail`}
            data-testid='thumbnail'
          />
        </div>
        <div>
          <div>{title}</div>
          <div>$ {price}</div>
          <div>{category}</div>
        </div>
      </Link>
    </li>
  );
}

export default ProductItem;
