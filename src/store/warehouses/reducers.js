import {
  FETCH_WAREHOUSES_REQUEST,
  FETCH_WAREHOUSES_SUCCESS,
  FETCH_WAREHOUSES_FAILURE,
  FILTER_WAREHOUSES,
  FILTER_BY_CATEGORY,
} from "./constants";

const initialState = {
  loading: false,
  warehouses: [],
  error: "",
  filteredData: [],
};

const warehousesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WAREHOUSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WAREHOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        warehouses: action.payload,
        filteredData: action.payload,
      };
    case FETCH_WAREHOUSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FILTER_WAREHOUSES:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
      };
    default:
      return state;
  }
};

export default warehousesReducer;
