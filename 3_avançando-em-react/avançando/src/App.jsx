import "./App.css";
// 2  - Img em assets
import night from "./assets/night.jpg";

// 3 - useState (hook)
import Data from "./components/data";

//  4 - renderizando listas
import ListRender from "./components/listRender";

// 7 - render condicional
import CondicionalRender from "./components/CondicionalRender";

function App() {
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
    </div>
  );
}

export default App;
