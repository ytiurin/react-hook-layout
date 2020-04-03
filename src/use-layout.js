import { createElement, Fragment } from "react";

import { distributeChildrenToSlots } from "./slots";

const layoutComponents = [];
const renderFunctions = [];

function createLayoutRender(LayoutComponent) {
  return props => {
    distributeChildrenToSlots(props && props.children);
    return createElement(LayoutComponent || Fragment, props);
  };
}

export function useLayout(LayoutComponent) {
  let wmIndex = layoutComponents.indexOf(LayoutComponent);

  if (wmIndex === -1) {
    layoutComponents.push(LayoutComponent);
    wmIndex = renderFunctions.push(createLayoutRender(LayoutComponent)) - 1;
  }
  return renderFunctions[wmIndex];
}
