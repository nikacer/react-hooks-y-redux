import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
/** componentes */
import Counter from "./compoments/counter/Counter";
import Info from "./compoments/Info";

const App = () => {
  return (
    <Provider store={store}>
      <Info />
      <Counter />
    </Provider>
  );
};

export default App;
