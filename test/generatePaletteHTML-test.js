import chai from "chai";
import generatePaletteHTML from "../src/generatePaletteHTML";
import { mockPalette, mockPaletteElement } from "./mockData";
const expect = chai.expect;

describe("generatePaletteHTML", () => {
  it("should return the correct HTML element", () => {
    const paletteElement = generatePaletteHTML(mockPalette)
    expect(paletteElement).to.equal(mockPaletteElement);
  });
});
