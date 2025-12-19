function CondicionalRender() {
  const x = false;

  const name = "João";

  return (
    <div>
      {/* 7 - Render condiconal */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim</p>}
      <h3>Render ternario</h3>
      {/* 8 - render condicional com if e else */}
      {name === "João" ? (
        <div>
          <p>Olá {name}</p>
        </div>
      ) : (
        <div>
          <p> Olá úsuario</p>
        </div>
      )}
    </div>
  );
}

export default CondicionalRender;
