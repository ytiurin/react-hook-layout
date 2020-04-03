import React from "react";
import { render } from "@testing-library/react";

import { useSlots } from "./env-src";

test("useSlots should return an object", () => {
  expect(useSlots()).toEqual({});
});

test("useSlots should accept string argument and return object with same key", () => {
  expect(useSlots("A")).toHaveProperty("A");
});

test("useSlots should accept array of strings argument and return object with same keys", () => {
  expect(useSlots(["A"])).toHaveProperty("A");
});
