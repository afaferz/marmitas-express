function Sealed<T extends { new (...args: never[]): object }>(
  constructor: T
): void {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
