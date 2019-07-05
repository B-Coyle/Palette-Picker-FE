const Color = require ('./Color');

class Palette {
    constructor(palette){
        const {palette_name, color1, color2, color3, color4, color5, project_id} = palette;
        this.palette_name = palette_name || ''
        this.color1 = color1 ? new Color(color1) : '';
        this.color2 = color2 ? new Color(color2) : '';
        this.color3 = color3 ? new Color(color3) : '';
        this.color4 = color4 ? new Color(color4) : '';
        this.color5 = color5 ? new Color(color5) : '';
        this.project_id = project_id || '';
    }

    //edit a palette

}

module.exports = Palette;