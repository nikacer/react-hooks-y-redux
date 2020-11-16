import React, { Fragment, useReducer, Suspense, lazy } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
/** componentes */
import Counter from "./compoments/counter/Counter";
// import Info from "./compoments/info/Info";
// import Refs from "./compoments/refs/Refs";
// import Formulario from "./compoments/formularios/Formulario";

/** UseContext */

import { UserProvider } from "./context/userContext";
import { UseReducerTest } from "./compoments/useReducer/UseReducer";
import StyledComponent, {
  GlobalStyle,
} from "./compoments/styledComponent/StylesComponent";

const Info = lazy(() => import("./compoments/info/Info"));
const Formulario = lazy(() => import("./compoments/formularios/Formulario"));
const Refs = lazy(() => import("./compoments/refs/Refs"));

const App = () => {
  const send = (data) => {
    console.log(data);
  };
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Provider store={store}>
        <GlobalStyle />
        <Info />
        <Counter />
        <UserProvider>
          <Refs />
        </UserProvider>

        <Formulario onSend={send} />
      </Provider>
      <UseReducerTest />
      <StyledComponent />
    </Suspense>
  );
};

export default App;
