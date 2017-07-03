/**
 * https://basarat.gitbooks.io/typescript/docs/types/literal-types.htm
 * @param o
 */
export function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
