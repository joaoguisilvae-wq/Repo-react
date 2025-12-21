import "./App.css";

// 2 - CSS de componente
import MyComponent from "./components/MyComponent";

// 6 - module css
import ComponenteEstilizadoComModule from "./components/ComponenteEstilizadoComModule";

function App() {
  // 4 - inline css dinamico
  const x = 10;
  return (
    <>
      <div>
        {/* 1 - CSS global */}
        <h1>CSS no React</h1>
        {/*  2 - CSS de componente */}
        <MyComponent />
        {/* 3 - inline style */}
        <p
          style={{
            color: "blue",
            /* errado border-top */ borderTop: "1px solid green",
          }}
        >
          yfycycyrct inline css
        </p>
        {/* 4 - inline css dinamico */}
        <h2 style={x > 1 ? { color: "blue" } : { fontSize: "100px" }}>
          Css dinamico
        </h2>
        <h2 style={x > 10 ? { color: "blue" } : { fontSize: "100px" }}>
          Css dinamico 2
        </h2>
        {/* 5 - Classe dinamica */}
        <h3 className={x < 1 ? "red-title" : "blue-title"}>
          eu tenho uma classe dinamica
        </h3>
        {/* 6 - module css */}
        <ComponenteEstilizadoComModule />
      </div>
    </>
  );
}

export default App;
