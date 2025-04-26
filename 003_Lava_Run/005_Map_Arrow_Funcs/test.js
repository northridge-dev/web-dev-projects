import { expect } from "chai";
import { randomNums, plusTwo } from "./source.js";

it("plusTwo is an array with the correct values", function () {
  expect(plusTwo).to.deep.equal(randomNums.map((n) => n + 2));
});
