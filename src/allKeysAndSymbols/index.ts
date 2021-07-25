export default function allKeysAndSymbols(object: Object): (string | Symbol)[] {
  const result = [];

  while (object) {
    result.push(...Reflect.ownKeys(object));
    object = Object.getPrototypeOf(object);
  }

  return result;
}
