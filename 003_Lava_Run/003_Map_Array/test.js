import { expect } from "chai";
import { original, squared } from "./source.js";

it("squared has the squares of the values in original", function () {
  expect(squared).to.deep.equal(original.map((n) => n ** 2));
});
