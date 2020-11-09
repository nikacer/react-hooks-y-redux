import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
/** componentes */
import Counter from "./compoments/counter/Counter";
import Info from "./compoments/info/Info";
import Refs from "./compoments/refs/Refs";
import Formulario from "./compoments/formularios/Formulario";

/** UseContext */

import { UserProvider } from "./context/userContext";

const App = () => {
  const send = (data) => {
    console.log(data);
  };
  return (
    <Provider store={store}>
      <Info />
      <Counter />
      <UserProvider>
        <Refs />
      </UserProvider>

      <Formulario onSend={send} />
    </Provider>
  );
};

export default App;
