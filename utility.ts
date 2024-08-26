export type LowercasePartialKeys<T extends {[k: string]: any}> = {
  [K in keyof T as Uncapitalize<K & string>]?: T[K];
};

function lowercaseFirstLetter(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export const factory = <T, U extends {[k: string]: any}>(src: T): U => {
  const dest: U = {} as U;
  for (const key in src) {
    if (Object.prototype.hasOwnProperty.call(src, key)) {
      const lowerCaseKey: keyof U = lowercaseFirstLetter(key);
      dest[lowerCaseKey] = src[key] as unknown as U[typeof lowerCaseKey];
    }
  }
  return dest;
};