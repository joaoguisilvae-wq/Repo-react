import { useState } from "react";

function ListRender() {
  const [list] = useState(["Matheus", "João", "Maria", "João"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Vitor", age: 21 },
    { id: 3, name: "Alok", age: 34 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };
  return (
    <div>
      {/* 4 - Render sem key */}
      <ul>
        {/*Alternativa se não houver algo para key */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* 5 - Render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - previous state */}
      <button onClick={deleteRandom}>Deletar usuario aleatorio</button>
    </div>
  );
}

export default ListRender;
