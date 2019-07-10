const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchPutPalette = (palette) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(palette)
  };
  return fetch(baseUrl + `palettes?project_id=${palette.id}`, options)
  .then(result => result.json());
};
