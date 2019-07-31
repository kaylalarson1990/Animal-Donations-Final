export const getAnimals = () => {
  return fetch("http://localhost:3001/api/v1/rescue-animals")
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching animal data"));
};

export const getDonations = () => {
  return fetch("http://localhost:3001/api/v1/donations")
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .catch(error => Error("Error fetching donation data"));
};

