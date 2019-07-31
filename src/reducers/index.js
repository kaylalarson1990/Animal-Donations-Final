import { combineReducers } from "redux";
import { animalReducer } from "./animalReducer";
import { isLoadingReducer } from "./isLoadingReducer";
import { donationReducer } from "./donationReducer";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
  animals: animalReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  donations: donationReducer
});

export default rootReducer;
