import { combineReducers} from "redux";
import { cityReducer } from "./cityReducer";
import { locationReducer } from "./locationReducer";

const mainReducer = combineReducers({
    city: cityReducer,
    location: locationReducer
});

export default mainReducer;