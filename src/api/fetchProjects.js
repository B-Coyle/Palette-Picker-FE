const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";


export const fetchProjects = () => {
  return fetch(baseUrl + "projects").then(result => result.json());
}