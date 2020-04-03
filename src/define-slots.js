import { argsAsNames } from "./args-as-names";

const slotComponents = {};

export function defineSlots() {
  return Array.prototype.reduce.call(
    argsAsNames(arguments),
    function (result, name) {
      result[name] =
        slotComponents[name] ||
        (slotComponents[name] = function (props) {
          return props.children || null;
        });
      if (
        !Object.defineProperty(result[name], "name", {
          configurable: true,
          enamerable: false,
          value: name,
          writable: false
        })
      )
        throw new Error("Could not define name of the slot function");
      return result;
    },
    {}
  );
}
