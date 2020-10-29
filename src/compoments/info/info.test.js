import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Info from "./Info";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({
  adapter: new Adapter(),
});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

const mockStore = configureMockStore();
const store = mockStore({ counter: 0, user: { name: "nicolas" } });

describe("probando componente Info", () => {
  test("probando render del componente", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Info />
      </Provider>
    );
    console.log(wrapper.html());
  });
});
