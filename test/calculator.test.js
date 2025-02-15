const { expect } = require("chai");
const add = require("../src/calculator");

describe("String Calculator", () => {
    it("should return 0 for an empty string", () => {
        expect(add("")).to.equal(0);
    });

    it("should return the number itself when input is a single number", () => {
        expect(add("1")).to.equal(1);
    });
    
});