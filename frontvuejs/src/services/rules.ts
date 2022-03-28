export function max25chars(v: string) {
  return v.length <= 25 || "Input too long, over 25 caracters!";
}
