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


//need to add a locked in status (to project/palette or just palette)
//instance of project 
//might need a domupdates later to reflect changes
export default Project;