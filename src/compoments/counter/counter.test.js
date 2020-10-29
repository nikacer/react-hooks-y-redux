import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import { increment, decrement } from "../../redux/action/counter.action";

const mockStore = configureMockStore();
const store = mockStore({ counter: 0 });

describe("test counter", () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  beforeEach(() => {
    store.clearActions();
  });

  test("test title", () => {
    const linkElement = screen.getByText(/Componente Count/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("action increment", () => {
    store.dispatch(increment());
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "INCREMENT" }]);
  });

  test("action decrement", () => {
    store.dispatch(decrement());
    const actions = store.getActions();
    expect(actions).toEqual([{ type: "DECREMENT" }]);
  });

  test("action increment two option", async () => {
    const action = await store.dispatch(increment());
    expect(action).toEqual({ type: "INCREMENT" });
  });
});
