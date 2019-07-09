import $ from 'jquery';
import generatePaletteHTML from './generatePaletteHTML';
import generateProjectHTML from './generateProjectHTML';

export const DU = {
  populateOptions: (project) => {
    $("#project-select").append(
      `<option value=${project.id} id='project-option${project.id}'>${
        project.project_name
      }</option>`
    );
  },

  appendPalette: (project, newPalette) => {
    $(`#project${project.id}`).append(
      generatePaletteHTML(newPalette)
    );
  },

  changeColor: (id, color) => {
    $(`#color${id}`).css("background-color", color);
    $(`#color${id}-name`).text(color);
  },

  toggleLock: (id, locked) => {
    $(`#color${id}`).data("locked", !locked);
    $(`.color-lock${id}`).toggleClass("fa-lock-open");
    $(`.color-lock${id}`).toggleClass("fa-lock");
  },

  appendProject: (project) => {
      $(".saved-projects-section").append(generateProjectHTML(project));
  },

  removePalette: (id) => {
    $(`#palette${id}`).remove();
  },

  removeProject: (id) => {
    $(`#project${id}`).remove();
    $(`#project-option${id}`).remove();
  }
}