import {
  FETCH_WAREHOUSES_REQUEST,
  FETCH_WAREHOUSES_SUCCESS,
  FETCH_WAREHOUSES_FAILURE,
  FILTER_WAREHOUSES,
  FILTER_BY_CATEGORY,
} from "./constants";

export const fetchWarehousesRequest = () => {
  return {
    type: FETCH_WAREHOUSES_REQUEST,
  };
};

export const fetchWarehousesSuccess = (Warehouses) => {
  return {
    type: FETCH_WAREHOUSES_SUCCESS,
    payload: Warehouses,
  };
};

export const fetchWarehousesFailure = (error) => {
  return {
    type: FETCH_WAREHOUSES_FAILURE,
    payload: error,
  };
};

export const getFilteredWarehouses = (warehouses) => {
  return {
    type: FILTER_WAREHOUSES,
    payload: warehouses,
  };
};

export const getFilterCategory = (warehouses) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: warehouses,
  };
};
