const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchPutPalette = (id) => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: $(this).text() })
  };
  return fetch(baseUrl + "palettes/" + id, options)
  .then(result => result.json());
};
