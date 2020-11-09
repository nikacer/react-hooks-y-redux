import React, { Component, useState } from "react";

function Formulario(props) {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    email: "",
  });

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
  );
}

export default Formulario;
