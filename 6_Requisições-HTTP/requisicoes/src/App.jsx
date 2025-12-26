import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

import "./App.css";

function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  //   useEffect(() => {
  //     async function getData() {
  //       const res = await fetch(url);

  //       const data = await res.json();

  //       setProducts(data);
  //     }
  //     getData();
  //   }, []);

  // 2 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // 5 - refatorando post
    httpConfig(product, "POST");

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },

    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinamico
    // const addProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addProduct]);
  };

  return (
    <div>
      {/* 1 - resgatando dados */}
      {/* 6 - loading */}
      {loading && <p>Carregando ...</p>}

      {/* 8 - tratando erros */}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      {/* envio de dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            price
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* <input type="submit" value="Enviar" /> */}
          {/* 7 - loading post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
