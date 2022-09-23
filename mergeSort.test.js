// using Jest without react:
// https://stackoverflow.com/questions/59879689/jest-syntaxerror-cannot-use-import-statement-outside-a-module

import mergeSort from "./mergeSort";

test("returns sorted array", () => {
  expect(mergeSort([4, 8, 7, 2, 11, 1, 3])).toEqual([1, 2, 3, 4, 7, 8, 11]);
  expect(mergeSort([200, 3500, 400, 90000, 7000])).toEqual([
    200, 400, 3500, 7000, 90000,
  ]);
});
