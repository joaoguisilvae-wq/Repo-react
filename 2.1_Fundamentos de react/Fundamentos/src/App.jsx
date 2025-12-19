import "./App.css";

// 2 - exportando primeiro componente
import FirstComponent from "./components/FirstComponent";

// 4  - Template expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - hierarquia de componentes
import MyComponet from "./components/MyComponet";

// 6 - Eventos
import Events from "./components/Events";

function App() {
  // 3 - comentarios (fora do jsx/html)
  return (
    <div>
      {/*3 - comentarios (dentro do jsx/html) */}
      <h1>fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponet />
      <Events />
    </div>
  );
}

export default App;
