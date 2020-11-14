import React, { Component, useState, Fragment } from "react";
import useSize from "../hookPersonalizado/HookPersonalizado";
import useFetch from "../hookPersonalizado/hookHttp";

function Formulario(props) {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
  });

  const { width, height } = useSize();
  const [users, ok] = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = event.target[0].value;
    const email = event.target[1].value;

    // Manejo de datos
    props.onSend({ nombre, email });
  };

  const modificarInputForm = ({ target }) => {
    setDataForm((dataForm) => ({ ...dataForm, [target.name]: target.value }));
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={modificarInputForm}
          value={dataForm.nombre}
          placeholder="Nombre"
          name="nombre"
        />
        <input
          type="text"
          onChange={modificarInputForm}
          value={dataForm.email}
          placeholder="Email"
          name="email"
        />
        <button type="submit">Enviar</button>
      </form>

      <p>
        {" "}
        {height} -- {width}
      </p>

      {!ok && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

export default Formulario;
