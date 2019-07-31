export const isLoadingReducer = (state = true, { type }) => {
  switch (type) {
    case "LOAD_COMPLETE":
      return false;
    default:
      return state;
  }
};
