function Events() {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  //   8 - Função de renderização  const a = abacaxi;
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando</h1>;
    } else {
      return <h2>Algo deu errado</h2>;
    }
  };

  //   return 10 > 2 && <p>Carregando</p>;

  return (
    <div>
      {/* 6 - Eventos */}
      <div>
        <button
          onClick={() => {
            console.log("testando um evento");
          }}
        >
          Clique
        </button>
      </div>
      {/* 7 - Evento com função */}
      <div>
        <button onClick={handleClick}>CLique aqui</button>
      </div>
      {/* 8 - função com renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default Events;
