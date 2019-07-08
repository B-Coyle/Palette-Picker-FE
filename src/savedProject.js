function generateProjectHTML(project) {
    const palettes = project.palettes.map(palette => {
        return `<div class='palette-holder'>
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
              <i class="fas fa-trash-alt fa-2x"></i>
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