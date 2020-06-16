import { combineReducers } from "redux";

import { appConfigReducer } from "./app-config.reducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
