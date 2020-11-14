import React, { Fragment, useReducer } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
/** componentes */
import Counter from "./compoments/counter/Counter";
import Info from "./compoments/info/Info";
import Refs from "./compoments/refs/Refs";
import Formulario from "./compoments/formularios/Formulario";

/** UseContext */

import { UserProvider } from "./context/userContext";
import { UseReducerTest } from "./useReducer/UseReducer";

const App = () => {
  const send = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <Provider store={store}>
        <Info />
        <Counter />
        <UserProvider>
          <Refs />
        </UserProvider>

        <Formulario onSend={send} />
      </Provider>
      <UseReducerTest />
    </Fragment>
  );
};

export default App;
