import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFatch";

const Search = () => {
  const [SearchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + SearchParams;
  const { data: items } = useFetch(url);

  return (
    <div>
      <h1>Resultado da pesquisae</h1>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/* 7 - rota dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
    </div>
  );
};

export default Search;
