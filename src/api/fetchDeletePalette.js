const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchDeletePalette = (id) => {
  return fetch(baseUrl + "palettes/" + id, {
    method: "DELETE"
  });
}