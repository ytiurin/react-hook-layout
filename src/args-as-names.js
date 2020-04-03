export function argsAsNames(args) {
  return (args[0] && ((args[0].splice && args[0]) || args)) || [];
}
