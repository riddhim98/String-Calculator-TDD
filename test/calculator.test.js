const { expect } = require("chai");
const add = require("../src/calculator");

describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });

    it("should return the number itself when input is a single number", () => {
        expect(add("1")).to.equal(1);
    });

    it("should return sum of two numbers", () => {
        expect(add("1,5")).to.equal(6);
    });

    it("should handle multiple numbers", () => {
        expect(add("1,2,3,4")).to.equal(10);
    });

    it("should support newline as delimiter", () => {
        expect(add("1\n2,3")).to.equal(6);
    });

    it("should support custom delimiters", () => {
        expect(add("//;\n1;2")).to.equal(3);
    });
});