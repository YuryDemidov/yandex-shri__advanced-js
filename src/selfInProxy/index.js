export default function selfInProxy(obj) {
    return new Proxy(obj, {
        has(target, prop) {
            return Reflect.ownKeys(target).includes(prop);
        },
    });
}
