import { filterWith } from "../app/filterWith";
import { data } from "./testData";

describe("filterWith test suite", () => {
  it("should return empty array if phrase is not included", () => {
    const result = filterWith(data, "bitcoin");
    expect(result).toEqual([]);
  });
  it("should return empty array if phrase doesnt have at least three letters", () => {
    const result = filterWith(data, "sh");
    expect(result).toEqual([]);
  });
  it("should return every object in which phrase is included", () => {
    const result = filterWith(data, "brown");
    expect(result).toEqual([data[0], data[1], data[3]]);
  });
  it("should return every element with nested object", () => {
    const result = filterWith(data, "Sheppard");
    expect(result).toEqual([data[0]]);
  });
});
