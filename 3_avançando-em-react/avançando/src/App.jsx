import "./App.css";
import { useState } from "react";
// 2  - Img em assets
import night from "./assets/night.jpg";

// 3 - useState (hook)
import Data from "./components/data";

//  4 - renderizando listas
import ListRender from "./components/listRender";

// 7 - render condicional
import CondicionalRender from "./components/CondicionalRender";

// 8 - props
import ShowUserName from "./components/ShowUserName";

/* 9 - Desestruturando props */
import CarDetails from "./components/CarDetails";

// 12 - fragments
import Fragment from "./components/Fragment";

// 13 - children
import Container from "./components/Container";

// 14 - Função em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - state lift
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// 11 - renderização de lista com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {
  // 14 - Função em prop
  function showMessage() {
    console.log("executou");
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Img em puclic */}
      <img src="/img.jpg" alt="algo aqui" />
      {/* 2 - Img em assets */}
      <img src={night} alt="outra img" />
      {/* 3 - useState */}
      <Data />
      <ListRender />
      {/* 7 - render condicional */}
      <CondicionalRender />
      {/* 8 - props */}
      <ShowUserName name="Matheus" />
      {/* 9 - Desestruturando props */}
      <CarDetails brand="VW" km={1039} color="Vermelho" />
      {/* 10 - Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={19} color="Preto" />
      <CarDetails brand="Audi" km={103} color="Vermelho" />
      {/* 11 - renderização de lista com componentes*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
      {/* 12 - fragments */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>iebadei</p>
      </Container>
      <Container>
        <div>
          <h2>Avançando</h2>
          <p>iosmom</p>
        </div>
      </Container>
      <div>
        <h1>Conteudo do componente pai:</h1>
        <div>
          <h2>Avançado</h2>
          <p>iosmom</p>
        </div>
      </div>
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
