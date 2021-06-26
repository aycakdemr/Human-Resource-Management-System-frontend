
import { CHANGE_WAY_OF_WORKING } from "../actions/wayOfWorkingActions";
import { wayOfWorkingItems } from "../initialValues/wayOfWorkingItems";

const initialState = {
    wayOfWorkingItems: wayOfWorkingItems,
  };

  export default function wayOfWorkingReducer(state = initialState, { type, payload }) {
    switch (type) {
      case CHANGE_WAY_OF_WORKING:
        return {
          ...state,
          wayOfWorkingItems: [...state.wayOfWorkingItems, { wayOfWorking: payload }],
        };
  
      default:
        return {
          ...state,
        };
    }
  }