import chai from "chai";
import Palette from "../src/classes/Palette.js";
const expect = chai.expect;

describe("See if the tests are running", function() {
  it("should return true", function() {
    expect(true).to.equal(true);
  });
});

describe("Palette", function() {
  let palette;

  this.beforeEach(() => {
    palette = new Palette({
      id: 1,
      palette_name: "Mountain Spring",
      color1: "White",
      color2: "Red",
      color3: "Blue",
      color4: "Green",
      color5: "Pink",
      project_id: 1
    });
  });

  // it('should have default properties', function() {
  //   expect(palette.id).to.equal(1);
  //   expect(palette.palette_name).to.equal('Mountain Spring');
  //   expect(palette.color1).to.equal('White');
  //   expect(palette.color2).to.equal('Red');
  //   expect(palette.color3).to.equal('Blue');
  //   expect(palette.color4).to.equal('Green');
  //   expect(palette.color5).to.equal('Pink');
  //   expect(palette.project_id).to.equal(1);
  //   // id, palette_name, color1, color2, color3,
  //   //  color4, color5, project_id
  // })

  it("should have palette id of 1", function() {
    expect(palette.id).to.equal(1);
  });

  it("should have a palette name of Mountain Spring", function() {
    expect(palette.palette_name).to.equal("Mountain Spring");
  });
  
  it("should have one palette color of white", function() {
    expect(palette.color1).to.equal('White');
});

it("should have one palette color of red", function() {
  expect(palette.color2).to.equal('Red');
});

it("should have one palette color of blue", function() {
  expect(palette.color3).to.equal('Blue');
});

it("should have one palette color of green", function() {
  expect(palette.color4).to.equal('Green');
});

it("should have one palette color of Pink", function() {
  expect(palette.color5).to.equal('Pink');
});

});
