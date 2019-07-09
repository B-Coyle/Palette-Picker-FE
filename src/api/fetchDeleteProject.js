const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchDeleteProject = (id) => {
  return fetch(baseUrl + "projects/" + id, {
    method: "DELETE"
  });
}