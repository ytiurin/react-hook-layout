import { argsAsNames } from "./args-as-names";
import { getSlot } from "./slots";

export function useSlots() {
  return Array.prototype.reduce.call(
    argsAsNames(arguments),
    (nextSlots, slotName) => {
      nextSlots[slotName] = getSlot(slotName);
      return nextSlots;
    },
    {}
  );
}
