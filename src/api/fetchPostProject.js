const baseUrl = "https://palette-picker-jbbc.herokuapp.com/api/v1/";

export const fetchPostProject = (name) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ project_name: name })
  };
  return fetch(baseUrl + "projects", options)
    .then(result => result.json());
}