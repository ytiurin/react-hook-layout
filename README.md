# react-hook-layout

[Demo page][demo]

This hook is a variation of the approach, described on [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html "Composition vs Inheritance") documentation page.

Layout is now a separate component, and can be applied on different pages. Also, it's easy to switch layouts in runtime.

## Install

```
npm i react-hook-layout
```

## Usage

1. Layout component look like this:

```javascript
import { useSlots } from "react-hook-layout";

export const MyLayout = () => {
  const { A, B } = useSlots("A", "B");

  return (
    <>
      <article>{A}</article>
      <footer>{B}</footer>
    </>
  );
};
```

2. Page component using layout:

```javascript
import { defineSlots, useLayout } from "react-hook-layout";
import { MyLayout } from "./MyLayout";

const { A, B } = defineSlots("A", "B");

const MyPage = () => {
  const Layout = useLayout(MyLayout);

  return (
    <Layout>
      <A>My article</A>
      <B>Author by Me</B>
    </Layout>
  );
};
```

Page will render to:

```html
<article>My article</article>
<footer>Author by Me</footer>
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
