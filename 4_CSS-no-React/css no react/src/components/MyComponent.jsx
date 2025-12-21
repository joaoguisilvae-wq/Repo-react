import "./MyComponent.css";
function MyComponent() {
  const x = 10;
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>esse paragrafop tem estilo unico</p>
      {/* 5 - Classe dinamica */}
      <h3 className={x > 1 ? "red-title" : "blue-title"}>
        eu tenho uma classe dinamica
      </h3>
    </div>
  );
}

export default MyComponent;
