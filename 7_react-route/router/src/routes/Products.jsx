import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFatch";

const Products = () => {
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;

  const { data: product } = useFetch(url);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Id do produto {product.id}</p>
          <p>R$: {product.price}</p>
          {/* 8 - nested route */}
          <Link to={`/products/${product.id}/info`}>More info</Link>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Products;
