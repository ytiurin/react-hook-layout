import React from "react";
import { render } from "@testing-library/react";

import { defineSlots, useLayout, useSlots } from "./env-src";

test("Layout should be renderable", () => {
  const Layout = useLayout();
  const { container } = render(<Layout />);
  expect(container).toMatchInlineSnapshot(`<div />`);
});

test("Layout should render basic layout", () => {
  const Layout = useLayout(() => "Hi");
  const { container } = render(<Layout />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      Hi
    </div>
  `);
});

test("Layout should render a slot", () => {
  const Layout = useLayout();
  const { A } = defineSlots("A");
  const { container } = render(
    <Layout>
      <A>Hi</A>
    </Layout>
  );
  expect(container).toMatchInlineSnapshot(`
<div>
  Hi
</div>
`);
});

test("Layout should render a layout component with slots", () => {
  const Layout = useLayout(() => {
    const { A } = useSlots("A");
    return <div>{A}</div>;
  });
  const { A } = defineSlots("A");
  const { container } = render(
    <Layout>
      <A>Hi</A>
    </Layout>
  );
  expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    Hi
  </div>
</div>
`);
});
