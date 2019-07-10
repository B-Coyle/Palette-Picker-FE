import $ from "jquery";
import "./css/styles.scss";
import randomHexColor from "random-hex-color";
import { fetchProjects } from "./api/fetchProjects";
import { fetchPalettes } from "./api/fetchPalettes";
import { fetchPostProject } from "./api/fetchPostProject";
import { fetchPostPalette } from "./api/fetchPostPalette";
import { fetchDeletePalette } from "./api/fetchDeletePalette";
import { fetchDeleteProject } from "./api/fetchDeleteProject";
import { DU } from "./domUpdates";
import { fetchPutPalette } from "./api/fetchPutPalette";

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
// $(".saved-palettes").onClick("click", e => editPalette(e));

const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const getProjects = () => {
  fetchProjects()
    .then(projectsData => getPalettes(projectsData))
    .catch(error => console.log(error));
};

export const getPalettes = projectsData => {
  projectsData.forEach(project => {
    fetchPalettes(project).then(palettes => generateProject(project, palettes));
  });
};

export const generateProject = (project, palettes) => {
  project.palettes = [];
  palettes.forEach(palette => {
    project.palettes.push(palette);
  });
  projects.push(project);
  DU.populateOptions(project);
  DU.appendProject(project);
};

export function createProject(e) {
  e.preventDefault();
  const name = $(".project-name-input").val();
   fetchPostProject(name).then(data => {
    if(!projects.map(project => project.name).includes(name)){
      const project = { project_name: name, id: data.id, palettes: [] };
      projects.push(project);
      DU.populateOptions(project);
      DU.appendProject(project);
      DU.resetInputs();
    
    } else {
      $('.project-exists').removeClass('hidden')
    }
  });
}

export function createPalette(e) {
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
  fetchPostPalette(palette).then(data => {
    const newPalette = { ...palette, id: data.id };
    const targetProject = projects.find(
      project => project.id == newPalette.project_id
    );
    targetProject.palettes.push(newPalette);
    DU.appendPalette(targetProject, newPalette);
    DU.resetInputs();
  });
}

export function generateColors() {
  let id = 1;
  while (id <= 5) {
    const locked = $(`#color${id}`).data().locked;
    if (!locked) {
      const color = randomHexColor();
      DU.changeColor(id, color);
    }
    id++;
  }
}

export function toggleLock(e) {
  const id = e.target.id;
  const locked = $(`#color${id}`).data().locked;
  DU.toggleLock(id, locked);
}

export function buttonRouter(e) {
  const targetClasses = [...e.target.classList];
  if (targetClasses.includes("trash-btn")) {
    deletePalette(e);
  } else if (targetClasses.includes("delete-project-btn")) {
    deleteProject(e);
  }
}

export function deletePalette(e) {
  const id = e.target.id;
  const projectID = e.target.dataset.project;

  fetchDeletePalette(id)
    .then(response => {
      if (response.ok) {
        const targetProject = projects.find(project => project.id == projectID);
        targetProject.palettes.filter(palette => palette.id !== id);
        DU.removePalette(id);
      }
    })
    .catch(error => console.log(error));
}

export function deleteProject(e) {
  const id = e.target.id;
  fetchDeleteProject(id)
    .then(response => {
      if (response.ok) {
        projects.filter(project => project.id !== id);
        DU.removeProject(id);
      }
    })
    .catch(error => console.log(error));
}

export function editPalette(e) {
  e.preventDefault();
  const id = e.target.id;
  const projectID = e.target.dataset.project;
  if (id !== projectID) {
    fetchPutPalette(id)
      .then(() => getProjects())
      .catch(error => console.log(error));
  }
}
