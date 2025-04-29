import { expect } from "chai";
import { original, result } from "./source.js";

it("result follows the pattern described", function () {
  expect(result).to.deep.equal(original.map((v, i) => v + i));
});
