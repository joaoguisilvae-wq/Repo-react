import "./MyForm.css";

import { useState } from "react";

function Myform({ userName, userEmail }) {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email, bio);

  // 5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);

    // validação
    // envio

    // 7 - limpar os inputs
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1 - Criando form */}
      {/* 5 - Envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            // 3 - gerenciamento de dados
            onChange={handleName}
            // 6 - controlled input
            value={name || ""}
          />
        </div>
        {/* 2 - label emvolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            // 4 - simplificando manipulação de dados
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled input
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuario"
            onChange={(e) => {
              setBio(e.target.value);
            }}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <option value="user">Usuarío</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        {/* 5 - Envio de form */}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Myform;
