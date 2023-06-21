import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../data/products";
import { Carousel } from "../components/Carousel/Carousel";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data: product, error, isLoading } = useQuery(
    ['product', productId],
    fetchProduct,
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  return (
    <div>
      <Link to="/products">Back to products</Link>
      {
        isLoading ? <h1>Loading...</h1>
          : error ? <h1>Something went wrong</h1>
            : product && <>
              <h1>{product.title}</h1>
              <Carousel images={product.images} />
              <p>{product.description}</p>
            </>
      }
    </div>
  );
}

export default ProductDetailPage;
