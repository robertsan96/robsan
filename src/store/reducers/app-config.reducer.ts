import { AppConfigState } from "./state.types";

export const initialState: AppConfigState = {
  test: "fsasa",
  nunu: "dada",
};

export const appConfigReducer = (state = initialState): AppConfigState => {
  return { ...state };
};
