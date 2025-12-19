import "./App.css";

// 2 - exportando primeiro componente
import FirstComponent from "./components/FirstComponent";
import MyComponet from "./components/MyComponet";

// 4  - Template expression
import TemplateExpression from "./components/TemplateExpression";

function App() {
  // 3 - comentarios (fora do jsx/html)
  return (
    <div className="App">
      {/*3 - comentarios (dentro do jsx/html) */}
      <h1>fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponet/>
    </div>
  );
}

export default App;
