import Project from './classes/Project';
import Palette from './classes/Palette';
import $ from 'jquery';
import './css/styles.scss';
let projects = [];

$('#create-project-btn').on('click', (e) => createProject(e))

const baseUrl = 'https://palette-picker-jbbc.herokuapp.com/api/v1/';

fetch(baseUrl + 'projects').then(result => {
    return result.json()
})
.then(projectsData => {
    projectsData.forEach(project => {
        fetch(baseUrl + `palettes?project_id=${project.id}`).then(result => {
            return result.json()
        })
        .then(palettes => {
            project.palettes = [];
            palettes.forEach(palette => {
               project.palettes.push(new Palette(palette))
            })
            projects.push(new Project(project));
            populateOptions(project);
        })
    })
})

function createProject(e) {
    e.preventDefault();
    const name = $('.project-name-input').val();
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({project_name: name})
    }
    fetch(baseUrl + 'projects', options).then(result => {
        return result.json()
    })
    .then(data => {
        const project = {project_name: name, id: data.id}
        projects.push(new Project(project));
        populateOptions(project);
    })
}

function populateOptions(project) {
        $('#project-select').append(`<option value=${project.id}>${project.project_name}</option>`)
}

function createPalette(e) {
    e.preventDefault();


}




