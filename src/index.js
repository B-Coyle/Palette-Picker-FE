import Project from "./classes/Project";
import Palette from "./classes/Palette";
import $ from "jquery";
import "./css/styles.scss";
import randomHexColor from 'random-hex-color';

let projects = [];

$( document ).ready(function() {
    generateColors();
});

$("#create-project-btn").on("click", e => createProject(e));
$("#create-palette-btn").on("click", e => createPalette(e));
$('.color-lock').on('click', e => toggleLock(e));

const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

fetch(baseUrl + "projects")
  .then(result => {
    return result.json();
  })
  .then(projectsData => {
    projectsData.forEach(project => {
      fetch(baseUrl + `palettes?project_id=${project.id}`)
        .then(result => {
          return result.json();
        })
        .then(palettes => {
          project.palettes = [];
          palettes.forEach(palette => {
            project.palettes.push(new Palette(palette));
          });
          projects.push(new Project(project));
          populateOptions(project);
        });
    });
  });

function createProject(e) {
  e.preventDefault();
  const name = $(".project-name-input").val();
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ project_name: name })
  };
  fetch(baseUrl + "projects", options)
    .then(result => {
      return result.json();
    })
    .then(data => {
      const project = { project_name: name, id: data.id };
      projects.push(new Project(project));
      populateOptions(project);
    });
}

function populateOptions(project) {
  $("#project-select").append(
    `<option value=${project.id}>${project.project_name}</option>`
  );
}

function createPalette(e) {
  e.preventDefault();
  const palette = {
    palette_name: $(".palette-name-input").val(),
    color1: $("#color1-name").text(),
    color2: $("#color2-name").text(),
    color3: $("#color3-name").text(),
    color4: $("#color4-name").text(),
    color5: $("#color5-name").text(),
    project_id: $("#project-select").val()
  };
  console.log('palette test', palette);
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({ palette_name: name })
//   };
//   fetch(baseUrl + "projects", options)
//     .then(result => {
//       return result.json();
//     })
//     .then(data => {
//       const project = { project_name: name, id: data.id };
//       projects.push(new Project(project));
//       populateOptions(project);
//     });
}


function generateColors() {
    $('.color-container').each((index) => {
        const locked = $(`#color${index+1}`).data().locked
        if(!locked) {
            const color = randomHexColor();
            $(`#color${index+1}`).css('background-color', color);
            $(`#color${index+1}-name`).text(color);
        }
    })
}

function toggleLock(e) {
    const id = e.target.id;
    const locked = $(`#color${id}`).data().locked
    $(`#color${id}`).data('locked', !locked);
}