# react-hook-layout

[Demo page][demo]

This hook is a variation of the approach, described in [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html "Composition vs Inheritance") documentation page.

Layout is now represented as a separate component, and can be used across different pages. Also, it's easy to switch between multiple layouts in runtime.

## Install

```
npm i react-hook-layout
```

## Usage

1. Create a page component and define slots with the according content.

```javascript
import { defineSlots, useLayout } from "react-hook-layout";

const Page = () => {
  const { Content, Footer, Header, SidebarLeft, SidebarRight } = defineSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  const Layout = useLayout();

  return (
    <Layout>
      <Content>Center</Content>
      <Footer>Bottom</Footer>
      <Header>Top</Header>
      <SidebarLeft>Left</SidebarLeft>
      <SidebarRight>Right</SidebarRight>
    </Layout>
  );
};
```

It will render to:

```html
CenterBottomTopLeftRight
```

2. Create a layout component and fill it with slots, defining the structure of the layout.

```javascript
import { useSlots } from "react-hook-layout";

export const CommonLayout = () => {
  const { Content, Footer, Header, SidebarLeft, SidebarRight } = useSlots(
    "Content",
    "Footer",
    "Header",
    "SidebarLeft",
    "SidebarRight"
  );

  return (
    <div className="common-layout">
      <div className="header">{Header}</div>
      <div className="sidebar-left">{SidebarLeft}</div>
      <div className="content">{Content}</div>
      <div className="sidebar-right">{SidebarRight}</div>
      <div className="footer">{Footer}</div>
    </div>
  );
};
```

3. Apply the layout component on the page.

```javascript
const Page = () => {
  // ...
  const Layout = useLayout(CommonLayout);
  // ...
};
```

Now, the page will render to:

```html
<div class="common-layout">
  <div class="header">Top</div>
  <div class="sidebar-left">Left</div>
  <div class="content">Center</div>
  <div class="sidebar-right">Right</div>
  <div class="footer">Bottom</div>
</div>
```

## Examples

Check examples on the [demo page][demo]

_or_

Run storybook localy:

```
git clone https://github.com/ytiurin/react-hook-layout.git
cd react-hook-layout/storybook
npm run storybook
```

[demo]: https://ytiurin.github.io/react-hook-layout/
