import chai from 'chai';
import Project from '../src/classes/Project';
const expect = chai.expect;

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe("Project", function() {
  let project;
  
beforeEach(() => {
  project = new Project ({
    id: 1,
    project_name: 'Bridgett\s First Project',
    palettes: 'Mountain Fresh' || []
  })
});

it('should return an id of 1', function(){
  expect(project.id).to.equal(1);
});


it('should return the project name ', function(){
  expect(project.project_name).to.equal('Bridgett\s First Project');
});

it.skip('should return the palettes in the project', function(){
  expect(project.palettes).to.equal('Mountain Fresh');
});

});


