import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "./store";
import renderer from "react-test-renderer";
import App from "./App";
Enzyme.configure({ adapter: new Adapter() });

describe("<App /> component", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
