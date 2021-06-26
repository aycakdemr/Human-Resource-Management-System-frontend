import { CHANGE_CITY } from "../actions/cityActions";
import { cityItems } from "../initialValues/cityItems";

const initialState = {
  cityItems: cityItems,
};

export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_CITY:
      return {
        ...state,
        cityItems: [...state.cityItems, { city: payload }],
      };

    default:
      return {
        ...state,
      };
  }
}
