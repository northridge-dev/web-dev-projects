import { expect } from "chai";
import { multiply } from "./source.js";

it("multiply is an arrow function", function () {
  expect(typeof multiply).to.equal("function");
  expect(multiply.hasOwnProperty("prototype")).to.be.false;
});
it("multiply returns the product of two numbers", function () {
  expect(multiply(2, 3)).to.equal(6);
  expect(multiply(4, 5)).to.equal(20);
});
