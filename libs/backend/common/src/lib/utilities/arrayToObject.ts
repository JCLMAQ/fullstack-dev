type GenericRecord = Record<string, unknown>;

export const convertArrYToObject = <
  T extends GenericRecord,
  K extends keyof T,
>(
  array: ReadonlyArray<T>,
  keyName: K,
): Record<string, T> => Object.fromEntries(
  array.map((item: T) => [String(item[keyName]), item])
);

export const convertArrayToObjectWithOutKey = <
  T extends GenericRecord,
  K extends keyof T,
>(
  array: ReadonlyArray<T>,
  keyName: K,
): Record<string, Omit<T, K>> => Object.fromEntries(
  array.map((item: T) => {
    const { [keyName]: key, ...rest } = item;
    return [String(key), rest as Omit<T, K>];
  })
);

// Type-friendly version
export function convertArrayToObject
<
T extends { [prop in string | number]: any },
K extends keyof Pick<T, {
    [Key in keyof T]: T[Key] extends string | number ? Key : never
}[keyof T]> = keyof Pick<T, {
    [Key in keyof T]: T[Key] extends string | number ? Key : never
}[keyof T]>,
A extends T[] = T[]
>
(array: readonly T[], key: K)
{
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue) as { [propkey in A[number][K]]: A[number]; };
}

// Other versions

export const convertArrayToObjectFirst = <
  T extends GenericRecord,
  K extends keyof T,
>(
  array: ReadonlyArray<T>,
  key: K,
): Record<string, T> => {
  const initialValue: Record<string, T> = {};
  return array.reduce((obj: Record<string, T>, item: T) => {
    return {
      ...obj,
      [String(item[key])]: item,
    };
  }, initialValue);
};

export const convertArrayToObjectThird = <
  T extends GenericRecord,
  K extends keyof T,
>(
  array: ReadonlyArray<T>,
  key: K,
): Record<string, T> =>
array.reduce((acc: Record<string, T>, curr: T) => {
  acc[String(curr[key])] = curr;
  return acc;
}, {} as Record<string, T>);

// Even concise
export const convertArrayToObjectShort = <
  T extends GenericRecord,
  K extends keyof T,
>(
  array: ReadonlyArray<T>,
  key: K,
): Record<string, T> =>
array.reduce((acc: Record<string, T>, curr: T) => (acc[String(curr[key])] = curr, acc), {} as Record<string, T>);
// Basically everything inside parentheses will be evaluated, only the last value used will be only returned.


