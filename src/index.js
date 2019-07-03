// import './css/base.scss';
// import $ from 'jquery';
const Project = require('./classes/Project');
const Palette = require('./classes/Palette')

let projects = [];

const baseUrl = 'https://palette-picker-jbbc.herokuapp.com/api/v1/';

fetch(baseUrl + 'projects').then(result => {
    return result.json()
})
.then(projects => {
    projects = projects.map(project => {
        this['project'+ project.id] = new Project(project);
        fetch(baseUrl + `palettes?project_id=${project.id}`).then(result => {
            return result.json()
        })
        .then(palette => {
            this['project'+ project.id].palettes.push(new Palette(palette))
        })

    })

}).then(() => console.log(projects))




