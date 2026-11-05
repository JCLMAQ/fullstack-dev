/** The demo catalog consists of plain data and Dates, supported by structuredClone. */
export function produce<T>(value: T, update: (draft: T) => void): T {
  const draft = structuredClone(value);
  update(draft);
  return draft;
}
