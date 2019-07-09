import $ from "jquery";
import "./css/styles.scss";
import randomHexColor from "random-hex-color";
import generateProjectHTML from "./generateProjectHTML";
import generatePaletteHTML from "./generatePaletteHTML";

let projects = [];

$(document).ready(function() {
  generateColors();
  getProjects();
});

$("#create-project-btn").on("click", e => createProject(e));
$("#create-palette-btn").on("click", e => createPalette(e));
$(".color-lock").on("click", e => toggleLock(e));
$(".generate-palette-btn").on("click", generateColors);
$(".saved-projects-section").on("click", e => buttonRouter(e));

const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

const getProjects = () => {
  fetch(baseUrl + "projects")
    .then(result => result.json())
    .then(projectsData => getPalettes(projectsData))
    .catch(error => console.log(error));
}

const getPalettes = (projectsData) => {
  projectsData.forEach(project => {
    fetch(baseUrl + `palettes?project_id=${project.id}`)
      .then(result => result.json())
      .then(palettes => generateProject(project, palettes))
  });
}

const generateProject = (project, palettes) => {
  project.palettes = [];
  palettes.forEach(palette => {
    project.palettes.push(palette);
  });
  projects.push(project);
  populateOptions(project);
  populateSavedProject(project);
};

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
      const project = { project_name: name, id: data.id, palettes: [] };
      projects.push(project);
      populateOptions(project);
      populateSavedProject(project);
    });
}

function populateOptions(project) {
  $("#project-select").append(
    `<option value=${project.id} id='project-option${project.id}'>${project.project_name}</option>`
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
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(palette)
  };
  fetch(baseUrl + "palettes", options)
    .then(result => {
      return result.json();
    })
    .then(data => {
      const newPalette = { ...palette, id: data.id };
      const targetProject = projects.find(
        project => project.id == newPalette.project_id
      );
      targetProject.palettes.push(new Palette(newPalette));
      $(`#project${targetProject.id}`).append(generatePaletteHTML(newPalette))
    });
}

function generateColors() {
  let id = 1;
  while (id <= 5) {
    const locked = $(`#color${id}`).data().locked;
    if (!locked) {
      const color = randomHexColor();
      $(`#color${id}`).css("background-color", color);
      $(`#color${id}-name`).text(color);
    }
    id++;
  }
}

function toggleLock(e) {
  const id = e.target.id;
  const locked = $(`#color${id}`).data().locked;
  $(`#color${id}`).data("locked", !locked);
  $(`.color-lock${id}`).toggleClass("fa-lock-open");
  $(`.color-lock${id}`).toggleClass("fa-lock");
}

function populateSavedProject(project) {
  $(".saved-projects-section").append(generateProjectHTML(project));
}

function buttonRouter(e) {
  const targetClasses = [...e.target.classList];
  if (targetClasses.includes("trash-btn")) {
    deletePalette(e);
  } else if(targetClasses.includes('delete-project-btn')){
    deleteProject(e);
  }
}

function deletePalette(e) {
  const id = e.target.id;
  const projectID = e.target.dataset.project;

  fetch(baseUrl + "palettes/" + id, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        const targetProject = projects.find(project => project.id == projectID);
        targetProject.palettes.filter(palette => palette.id !== id);
        $(`#palette${id}`).remove();
      }
    })
    .catch(error => console.log(error));
}

function deleteProject(e) {
  const id = e.target.id;
  fetch(baseUrl + "projects/" + id, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        projects.filter(project => project.id !== id);
        $(`#project${id}`).remove();
        $(`#project-option${id}`).remove();
      }
    })
    .catch(error => console.log(error));
}
