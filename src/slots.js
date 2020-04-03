var slots = [];

export function distributeChildrenToSlots(children) {
  slots = [].concat(children || []).reduce((nextSlots, child) => {
    if (child.type) {
      nextSlots[child.type.name] = child;
    }
    return nextSlots;
  }, {});
}

export function getSlot(name) {
  return slots[name] || null;
}
