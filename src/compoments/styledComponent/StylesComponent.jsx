import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const sizes = {
  mobile: "max-width: 700px",
};

const devices = {
  mobile: (styles) => `@media (${sizes.mobile}) {
        ${styles}
    }`,
};

export const GlobalStyle = createGlobalStyle`
body {
    
    font-family: 'Goldman', cursive;
}
`;

const Header = styled.header`
  background-color: ${({ active }) => (active ? "blue" : "red")};
  text-align: center;
  h1 {
    color: ${({ active }) => (active ? "red" : "blue")};
  }

  ${devices.mobile`
    background-color: green;
  `}
`;

const HeaderSecundario = styled(Header)`
  font-size: 50px;
  margin-top: 30px;
`;

const InputTest = styled.input.attrs(({ placeholder, type }) => ({
  placeholder: placeholder || "INGRESE TEXTO",
  type: type || "text",
}))`
  padding: 1em;
  border: 1px solid blue;
`;

const StyledComponent = () => {
  const [active, setActive] = useState(false);

  const cambioColor = () => {
    setActive(!active);
  };
  return (
    <>
      <Header active={active}>
        <h1>Ejemplo Styled Components</h1>
        <button onClick={cambioColor}>Cambiar color</button>
      </Header>
      <HeaderSecundario>Texto del header heredado</HeaderSecundario>
      <InputTest />
      <InputTest placeholder="Ingrese su edad" type="number" />
    </>
  );
};

export default StyledComponent;
