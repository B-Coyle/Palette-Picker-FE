export const mockPalette = {
  id: 1,
  palette_name: "Mountain Spring",
  color1: "White",
  color2: "Red",
  color3: "Blue",
  color4: "Green",
  color5: "Pink",
  project_id: 1
};

export const mockPaletteElement =
  '<div class=\'palette-holder\' id=\'palette1\'>\n    <h3>Mountain Spring</h3>\n    <div class=\'saved-palettes\'>\n      <div \n        id="color1" \n        class="saved-color color-container" \n        style=\'background-color: White\'\n      >\n      </div>\n      <div \n        id="color2" \n        class="saved-color color-container" \n        style=\'background-color: Red\'\n      >\n      </div>\n      <div \n        id="color3" \n        class="saved-color color-container" \n        style=\'background-color: Blue\'\n      >\n      </div>\n      <div \n        id="color4" \n        class="saved-color color-container" \n        style=\'background-color: Green\'\n      >\n      </div>\n      <div \n        id="color5" \n        class="saved-color color-container" \n        style=\'background-color: Pink\'\n      >\n      </div>\n      <button \n        id=1 \n        data-project=1 \n        class=\'trash-btn\'\n      >\n        <i \n          id=1 \n          class="fas trash-btn fa-trash-alt fa-2x"\n        >\n        </i>\n      </button>\n    </div>\n  </div>';

export const mockProject = {
  id: 1,
  project_name: 'First Project',
  palettes: [mockPalette]
}

export const mockProjectElement =
         "\n  <article class='saved-projects' id='project1'>\n    <h2>First Project</h2>\n    <input type='button' type='button' id=1 class='delete-project-btn' value='Delete Project' />\n    <div class='palette-holder' id='palette1'>\n    <h3>Mountain Spring</h3>\n    <div class='saved-palettes'>\n      <div \n        id=\"color1\" \n        class=\"saved-color color-container\" \n        style='background-color: White'\n      >\n      </div>\n      <div \n        id=\"color2\" \n        class=\"saved-color color-container\" \n        style='background-color: Red'\n      >\n      </div>\n      <div \n        id=\"color3\" \n        class=\"saved-color color-container\" \n        style='background-color: Blue'\n      >\n      </div>\n      <div \n        id=\"color4\" \n        class=\"saved-color color-container\" \n        style='background-color: Green'\n      >\n      </div>\n      <div \n        id=\"color5\" \n        class=\"saved-color color-container\" \n        style='background-color: Pink'\n      >\n      </div>\n      <button \n        id=1 \n        data-project=1 \n        class='trash-btn'\n      >\n        <i \n          id=1 \n          class=\"fas trash-btn fa-trash-alt fa-2x\"\n        >\n        </i>\n      </button>\n    </div>\n  </div>\n  </article>\n    ";