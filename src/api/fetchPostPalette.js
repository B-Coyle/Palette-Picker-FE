const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchPostPalette = (palette) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(palette)
  };
  return fetch(baseUrl + "palettes", options)
    .then(result => result.json());
}