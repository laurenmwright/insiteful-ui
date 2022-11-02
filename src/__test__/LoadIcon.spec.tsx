import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { Load } from "../components";



test("renders icon correctly", () => {
    const {getByTestId} = render(<Load />);
    const LoadElement = getByTestId("Feather-Icon-Loader");
    expect(LoadElement).toContainElement(getByTestId("Feather-Icon-Loader"));
});

test("Correctly applies the centered styling prop", () => {
    const {getByTestId} = render(<Load center/>);
    const LoadElement = getByTestId("Div-Style");
    expect(LoadElement).toHaveClass('centerTrue');
});

test("Correctly applies actionBlue color to loading icon", () => {
    const {getByTestId} = render(<Load />);
    const LoadElement = getByTestId("Feather-Icon-Loader");
    expect(LoadElement).toHaveStyle('color: var(--color-actionBlue)');
});

