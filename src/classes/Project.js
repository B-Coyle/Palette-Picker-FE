import domUpdates from './domUpdates';

 class Project {
    constructor(project){
        this.id = project.id;
        this.project_name = project.project_name;
        this.palettes = project.palettes || [];
    }

   addPalette(palette){
       this.palettes.push(palette);
    }

}
export default Project;