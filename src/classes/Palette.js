import Color from './Color'

class Palette {
    constructor({palette}){
        this.palette_name = palette_name || ''
        this.color1 = color1 ? Color(color1) : '';
        this.color2 = color2 ? Color(color2) : '';
        this.color3 = color3 ? Color(color3) : '';
        this.color4 = color4 ? Color(color4) : '';
        this.color5 = color5 ? Color(color5) : '';
        this.project_id = project_id || '';
    }

    //edit a palette

}

module.exports = Palette;