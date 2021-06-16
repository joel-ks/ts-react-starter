import * as React from "react";
import { render } from "@testing-library/react";
import App from "../../app/App";


test("App.tsx renders as expected", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
