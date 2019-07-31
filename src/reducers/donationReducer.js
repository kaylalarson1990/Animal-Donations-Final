export const donationReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DONATIONS":
      return action.donations;
    case "ADD_DONATIONS":
      return [...state, action.donations];
    default:
      return state;
  }
};
