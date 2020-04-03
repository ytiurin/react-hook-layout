import React from "react";
import { render } from "@testing-library/react";

import { defineSlots } from "./env-src";

test("defineSlots should return an object", () => {
  expect(defineSlots()).toEqual({});
});

test("defineSlots should accept string argument and return object with same key", () => {
  expect(defineSlots("A")).toHaveProperty("A");
});

test("defineSlots should accept array of strings argument and return object with same keys", () => {
  expect(defineSlots(["A"])).toHaveProperty("A");
});

test("Slot should be renderable", () => {
  const { A } = defineSlots("A");
  const { container } = render(<A />);
  expect(container).toMatchInlineSnapshot(`<div />`);
});

test("Slot should render children", () => {
  const { A } = defineSlots("A");
  const { container } = render(<A>Hi</A>);
  expect(container).toMatchInlineSnapshot(`
<div>
  Hi
</div>
`);
});
