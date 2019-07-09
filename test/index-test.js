import chai from "chai";
import { DU } from '../src/domUpdates';
import spies from 'chai-spies';
// import * as i from '../src/index';
const expect = chai.expect;
chai.use(spies);
chai.spy.on(DU, [
  "populateOptions",
  "appendPalette",
  "changeColor",
  "toggleLock",
  "appendProject",
  "removePalette",
  "removeProject"
]);


describe("generateProject", function() {
  it("should do something", function() {
    // i.generateProject();
    expect(true).to.equal(true);
  });
});
