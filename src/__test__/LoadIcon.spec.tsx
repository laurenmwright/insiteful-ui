import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { Load } from "../components";



test("renders icon correctly", () => {
    const {getByTestId} = render(<Load/>);
    const LoadElement = getByTestId("Feather-Icon-Loader");
    expect(LoadElement).toContainElement(getByTestId("Feather-Icon-Loader"));
});