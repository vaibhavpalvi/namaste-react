import { sum } from "../Sum";

test("should return sum of two numbers", () => {
  const res = sum(2, 3);

  expect(res).toBe(5);
});
