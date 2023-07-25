const { sum, person, toggle, range } = require("./index");

describe("index.js test code", () => {
  it("sum function - sums 1 + 3 to equal 4", () => {
    expect(sum(1, 3)).toBe(4);
  });

  it("person function - return a person object", () => {
    expect(person("Jin", 29)).toEqual({ name: "Jin", age: 29 });
  });

  it("toggle function - return boolean", () => {
    // return false
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();

    // return true
    expect(toggle(false)).toBeTruthy();
    expect(toggle(false)).not.toBeFalsy();
  });

  it("range function - return array", () => {
    expect(range(1, 3)).toContain(1);
    expect(range(1, 3)).toContain(2);
    expect(range(1, 3)).toContain(3);
  });
});
