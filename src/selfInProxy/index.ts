export default function selfInProxy(obj: Object): Object {
  return new Proxy<Object>(obj, {
    has(target, prop): boolean {
      return Reflect.ownKeys(target).includes(prop);
    },
  });
}
