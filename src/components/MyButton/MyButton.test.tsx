import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import MyButton from "./MyButton";

test("Button has correct background color when primary prop is true", () => {
  const { getByText } = render(
    <MyButton
      primary={true}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      Click Me
    </MyButton>
  );
  const button = getByText("Click Me");
  expect(button).toHaveStyle("background-color: darkblue");
});
