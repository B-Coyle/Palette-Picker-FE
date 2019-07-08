function generateProjectHTML(project) {
    const palettes = project.palettes.map(palette => {
        return `
        <div class='palette-holder' id='palette${palette.id}'>
        <h3>${palette.palette_name}</h3>
        <div class='saved-palettes'>
            <div id="color1" class="saved-color color-container" style='background-color: ${palette.color1}'>
              </div>
              <div id="color2" class="saved-color color-container" style='background-color: ${palette.color2}'>
              </div>
              <div id="color3" class="saved-color color-container" style='background-color: ${palette.color3}'>
              </div>
              <div id="color4" class="saved-color color-container" style='background-color: ${palette.color4}'>
              </div>
              <div id="color5" class="saved-color color-container" style='background-color: ${palette.color5}'>
              </div>
              <button id=${palette.id} data-project=${palette.project_id} class='trash-btn'><i id=${palette.id} class="fas trash-btn fa-trash-alt fa-2x"></i></button>
            </div>
      </div>`
    }).join('')
    return `
    <article>
    <h2>${project.project_name}</h2>
    ${palettes}
  </article>
    `
}

export default generateProjectHTML;