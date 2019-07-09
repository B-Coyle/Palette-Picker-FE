const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchPalettes = (project) => {
  return fetch(baseUrl + `palettes?project_id=${project.id}`)
    .then(result => result.json());
};
