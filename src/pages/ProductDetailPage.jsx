import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../data/products";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data: product, error, isLoading } = useQuery(
    ['product', productId],
    fetchProduct
  );

  return (
    <div>
      <Link to="/products">Back to products</Link>
      {
        isLoading ? <h1>Loading...</h1>
          : error ? <h1>Something went wrong</h1>
            : product && <>

              <h1>{product.title}</h1>
              <img src={product.images[0]} alt={product.title} />
              <p>{product.description}</p>
            </>
      }
    </div>
  );
}

export default ProductDetailPage;
