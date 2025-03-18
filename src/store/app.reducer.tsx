import { combineReducers } from "redux";
import { commonReducer } from "./common/common.reducers";

const appReducer = combineReducers({
  commonReducer: commonReducer,
});
export type RootState = ReturnType<typeof appReducer>;
export type FGetState = () => RootState;
export default appReducer;