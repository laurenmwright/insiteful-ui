import React from "react";
import { render } from "@testing-library/react";
import { ProgressBar } from "../components";

test("renders percentage correctly", () => {
  const {getByTestId } = render(<ProgressBar percentage={44}></ProgressBar>);
  const progressBarElement = getByTestId("progress-bar");
  expect(progressBarElement).toHaveValue(44/100);
});

test("if progress bar background is action blue", () => {
  const {getByTestId} = render(<ProgressBar numerator= {2} denominator= {5}></ProgressBar>);
  const progressBarElement = getByTestId("progress-bar");
  expect(progressBarElement).toHaveStyle({backgroundColor: "#actionBlue"})
}); 

