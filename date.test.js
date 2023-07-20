import date from "./date";

test("date impossible", () => {
  expect(date("99/99/9999")).toBe(false);
});
test("date possible", () => {
  expect(date("2199-12-31")).toBe(true);
});
test("date possible", () => {
  expect(date("20/12/1000")).toBe(true);
});
test("date possible", () => {
  expect(date("01/01/1970")).toBe(true);
});
test("date possible", () => {
  expect(date("30/02/1930")).toBe(true);
});
test("date impossible", () => {
  expect(date("30/1930/02")).toBe(false);
});
test("n'est pas une date", () => {
  expect(date("a")).toBe(false);
});
