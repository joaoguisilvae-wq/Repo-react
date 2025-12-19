import { useState } from "react";

function Data() {
  let someData = 10;

  const [anotherNumber, setanotherNumber] = useState(15);
  const [palavra, setpalavra] = useState("Nome");

  return (
    <div>
      {/* Imprimindo com let */}
      <p>Valor {someData}</p>
      <button
        onClick={() => {
          someData = +1;
        }}
      >
        Mudar variavel
      </button>
      {/* Imprimindo com useState */}
      <div>
        <p>Value {anotherNumber}</p>
        <button onClick={() => setanotherNumber(12)}>Mudar Variavel </button>
      </div>
      <div>
        <p>Palavra: {palavra}</p>
        <button onClick={() => setpalavra("palavra")}>Mudar Palavra </button>
      </div>
    </div>
  );
}

export default Data;
