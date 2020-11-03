import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
/** componentes */
import Counter from "./compoments/counter/Counter";
import Info from "./compoments/info/Info";
import Refs from "./compoments/refs/Refs";

const App = () => {
  return (
    <Provider store={store}>
      <Info />
      <Counter />
      <Refs />
    </Provider>
  );
};

export default App;
