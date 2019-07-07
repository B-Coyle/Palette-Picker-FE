const Project = require('./classes/Project');
const Palette = require('./classes/Palette')
import $ from 'jquery';
import './css/styles.scss';
let projects = [];

const baseUrl = 'https://palette-picker-jbbc.herokuapp.com/api/v1/';

fetch(baseUrl + 'projects').then(result => {
    return result.json()
})
.then(projects => {
    projects = projects.map(project => {
        fetch(baseUrl + `palettes?project_id=${project.id}`).then(result => {
            return result.json()
        })
        .then(palettes => {
            palettes.forEach(palette => {
                this['project'+ project.id].palettes.push(new Palette(palette))
            })
        })
        return this['project'+ project.id] = new Project(project);
    })
    console.log(projects)
})





