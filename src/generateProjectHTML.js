import generatePaletteHTML from "./generatePaletteHTML";

function generateProjectHTML(project) {
  const palettes = project.palettes.map(palette => generatePaletteHTML(palette)).join('');
  return `
  <article class='saved-projects' id='project${project.id}'>
    <h2>${project.project_name}</h2>
    <input type='button' type='button' id=${project.id} class='delete-project-btn' value='Delete Project' />
    ${palettes}
  </article>
    `
}

export default generateProjectHTML;