export function Randomizer(min: number, max: number): number {
  if (min >= max) {
    throw new Error("min should be less than max");
  }

  const range = max - min;
  const randomValue = Math.random() * range + min;

  return randomValue;
}
