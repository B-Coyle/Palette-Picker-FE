import chai from "chai";
import { mockProject, mockProjectElement } from "./mockData";
import generateProjectHTML from "../src/generateProjectHTML";
const expect = chai.expect;

describe("generateProjectHTML", () => {
  it("should return the correct HTML element", () => {
    const projectElement = generateProjectHTML(mockProject)
    expect(projectElement).to.equal(mockProjectElement);
  });
});
