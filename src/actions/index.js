export const setAnimals = animals => ({
  type: "SET_ANIMALS",
  animals
});

export const setDonations = donations => ({
  type: "SET_DONATIONS",
  donations
});

export const addDonations = donations => ({
  type: "ADD_DONATIONS",
  donations
});

export const loadComplete = () => ({
  type: "LOAD_COMPLETE"
});

export const hasErrored = errorMessage => ({
  type: "HAS_ERRORED",
  errorMessage
});
